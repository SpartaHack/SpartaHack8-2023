import React, { useEffect, useState } from "react";
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
  const userId = useAuth();
  const contentsFromStore = useStore(
    useContentStore,
    (state) => state.contents,
  );
  const [contents, setContents] = useState(contentsFromStore);

  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);

  const [value, setValue] = useState<Selection>(
    new Set([
      contents && contents.space && contents.space.visibility === "public"
        ? "Public"
        : "Private",
    ]),
  );

  const handleSelectionChange = (newValue: Selection) => {
    if (newValue === "all") {
      setValue(value);
    } else {
      setValue(newValue.size === 0 ? value : newValue);
    }
  };

  useEffect(() => {
    const updateValue = async () => {
      const visibility = Array.from(value).includes("Private")
        ? `private`
        : `public`;
      const response = await updateSpace(
        auth.currentUser?.uid || userId!,
        contents.space._id,
        contents.space.name,
        contents.space.description,
        visibility,
      );
      if (response) {
        toast.success("Space updated successfully");
      } else {
        toast.error("Could not update space");
      }
    };
    updateValue();
  }, [value]);

  return (
    <Select
      items={privacyOptions}
      className="max-w-xs"
      variant="bordered"
      selectedKeys={value}
      onSelectionChange={handleSelectionChange}
      classNames={{
        base: "p-0 h-7",
        trigger: "shadow-none p-0 border-none",
        value: "text-extrabold p-0 h-10",
      }}
      renderValue={(privacyOptions) => {
        return privacyOptions.map((privacyOption) => (
          <div key={privacyOption.key} className="flex items-center gap-2">
            <Icon className="h-8 w-8" icon={privacyOption.data?.icon!} />
            <div className="flex flex-col ml-2">
              <span>{privacyOption.data?.value}</span>
              <span className="text-default-500 text-tiny mt-0.5">
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
