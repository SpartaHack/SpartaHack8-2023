import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSpaceStore } from "@/context/space-context";
import { getUserSpaceResponse } from "../../../types";
import { updateSpace } from "@/app/api/space";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import AddContent from "./add-content";
import { Spinner } from "@nextui-org/react";

const SpaceHeader = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [editSpaceName, setEditSpaceName] = useState(false);
  const [spaceNameInput, setSpaceNameInput] = useState("");

  if (!contents) {
    return <Spinner color="current" size="sm" />;
  }

  const spaceName = contents.space ? contents.space.space_name : "History";

  const handleIconClick = () => {
    setSpaceNameInput(spaceName);
    setEditSpaceName(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpaceNameInput(e.target.value);
  };

  const handleInputBlur = async () => {
    setEditSpaceName(false);
    if (spaceNameInput !== spaceName) {
      const updatedDataSpace = {
        _id: contents.space._id,
        space_name: spaceNameInput,
      } as Partial<getUserSpaceResponse>;

      const updatedData = {
        _id: contents.space._id,
        space_name: spaceNameInput,
      };

      const response = await updateSpace(
        auth.currentUser?.uid!,
        contents.space._id,
        spaceNameInput,
        "private",
      );
      if (response) {
        useSpaceStore.getState().updateSpaceData(updatedData);
        useContentStore.getState().updateContent(updatedDataSpace);
        toast.success("Space updated successfully.");
      } else {
        toast.error("Could not update space.");
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  return (
    <>
      <div className="sm:mt-16 sm:mx-24 mx-12 mt-8 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-4xl flex flex-row group font-sans w-[80%] font-semibold mb-4">
            {editSpaceName ? (
              <input
                className="outline-none font-sans text-neutral-400 w-full bg-transparent"
                type="text"
                value={spaceNameInput}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              spaceName
            )}
            {spaceName !== "History" && !editSpaceName && (
              <Icon
                icon="lucide:pen"
                className="opacity-0 h-5 w-5 mt-2 ml-2 cursor-pointer group-hover:opacity-50"
                onClick={handleIconClick}
              />
            )}
          </div>
          {spaceName !== "History" && (
            <div className="flex flex-row mt-3 md:mt-0 space-between">
              <AddContent />
            </div>
          )}
        </div>
      </div>

      <div className="border-[.5px] sm:mx-24 mx-10 mt-8 dark:border-neutral-800" />
    </>
  );
};

export default SpaceHeader;
