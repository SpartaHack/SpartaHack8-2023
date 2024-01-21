import React, { useEffect, useState } from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { privacyOptions } from "../../../utils/constants";
import { useStore } from "zustand";
import { useContentStore } from "@/context/content-store";

export default function SpacePrivacy() {
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

  return (
    <div className="flex w-full flex-row mt-4">
      <Icon
        icon={
          Array.from(value).includes("Private")
            ? `mingcute:lock-line`
            : `mingcute:unlock-line`
        }
        className="h-10 w-10 mt-1.5"
      />
      <div className="flex flex-col ml-3">
        <Select
          variant="bordered"
          selectedKeys={value}
          required
          onSelectionChange={handleSelectionChange}
          className="w-[100px]"
          size="sm"
          classNames={{
            base: "p-0 h-7",
            trigger: "shadow-none p-0 border-none",
            value: "text-extrabold text-md p-0 h-10",
            selectorIcon: "flex mb-4 mr-5",
          }}
        >
          {privacyOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.value}
            </SelectItem>
          ))}
        </Select>
        <span className="text-sm">
          {Array.from(value).includes("Private")
            ? `Only people with access with space`
            : `Accessible to the general public`}
        </span>
      </div>
    </div>
  );
}
