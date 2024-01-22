import React, { useEffect, useRef, useState } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { privacyOptions } from "../../../utils/constants";
import { useStore } from "zustand";
import { useContentStore } from "@/context/content-store";
import { updateSpace } from "@/app/api/space";
import { auth } from "../../../db/firebase";
import useAuth from "@/hooks/use-auth";
import { toast } from "sonner";

export default function SpacePrivacy() {
  const isMounted = useRef(false);
  const userId = useAuth();
  const contentsFromStore = useStore(
    useContentStore,
    (state) => state.contents,
  );
  const [contents, setContents] = useState(contentsFromStore);

  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);

  const [value, setValue] = useState<Selection>(() => {
    if (contents && contents.space) {
      return new Set([
        contents.space.visibility === "public" ? "Public" : "Private",
      ]);
    }
    return new Set();
  });
  const [prevValue, setPrevValue] = useState<Selection>(value);

  const handleSelectionChange = (newValue: Selection) => {
    if (newValue === "all") {
      setValue(value);
    } else {
      setValue(newValue.size === 0 ? value : newValue);
    }
  };

  useEffect(() => {
    const visibility = Array.from(value).includes("Private")
      ? `private`
      : `public`;
    if (
      isMounted.current &&
      visibility !== (contents && contents.space.visibility)
    ) {
      const updateValue = async () => {
        const response = await updateSpace(
          auth.currentUser?.uid || userId!,
          contents.space._id,
          contents.space.name,
          contents.space.description,
          visibility,
        );
        if (response) {
          const updatedDataSpace = {
            _id: contents.space._id,
            visibility: visibility,
          };
          useContentStore.getState().updateContent(updatedDataSpace);
          toast.success("Space updated successfully");
          setPrevValue(value);
        } else {
          toast.error("Could not update space");
          setValue(prevValue);
        }
      };
      updateValue();
    } else {
      isMounted.current = true;
    }
  }, [value]);

  return (
    <Select
      items={privacyOptions}
      variant="bordered"
      selectedKeys={value}
      onSelectionChange={handleSelectionChange}
      className="rounded-xl dark:hover:bg-neutral-800 hover:bg-neutral-200"
      classNames={{
        trigger: "shadow-none border-none",
        value: "text-extrabold p-0",
      }}
      renderValue={(privacyOptions) => {
        return privacyOptions.map((privacyOption) => (
          <div key={privacyOption.key} className="flex items-center gap-2">
            <Icon className="h-8 w-8" icon={privacyOption.data?.icon!} />
            <div className="flex flex-col ml-2">
              <span>{privacyOption.data?.value}</span>
              <span className="text-default-400 text-tiny mt-0.5">
                {privacyOption.data?.description}
              </span>
            </div>
          </div>
        ));
      }}
    >
      {(option) => (
        <SelectItem key={option.value} textValue={option.value}>
          <div className="flex gap-2 items-center">
            <Icon className="h-8 w-8" icon={option.icon} />
            <div className="flex flex-col ml-2">
              <span className="text-small">{option.value}</span>
              <span className="text-tiny text-default-400 mt-1">
                {option.description}
              </span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
