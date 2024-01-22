import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSpaceStore } from "@/context/space-context";
import { getUserSpaceResponse } from "../../../types";
import { updateSpace } from "@/app/api/space";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import AddContent from "./add-content";
import Loading from "@/app/loading";
import ShareSpace from "./share-space";
import SpaceDescription from "./space-description";
import useSpacePermission from "@/hooks/use-space-permissions";

const SpaceHeader = () => {
  const contentsFromStore = useStore(
    useContentStore,
    (state) => state.contents,
  );
  const [contents, setContents] = useState(contentsFromStore);
  const [editSpaceName, setEditSpaceName] = useState(false);
  const [spaceNameInput, setSpaceNameInput] = useState("");

  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);

  const spaceName = contents && contents.space && contents.space.name;
  const spacePersmission = useSpacePermission(contents && contents);

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
        name: spaceNameInput,
      } as Partial<getUserSpaceResponse>;

      const updatedData = {
        _id: contents.space._id,
        name: spaceNameInput,
      };

      const response = await updateSpace(
        auth.currentUser?.uid!,
        contents.space._id,
        spaceNameInput,
        contents.space.description,
        contents.space.visibility,
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

  if (!contents) {
    return <Loading />;
  }

  return (
    <>
      <div className="sm:mx-24 md:mt-12 mt-8 mx-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col w-full">
            <div className="text-4xl flex flex-row group font-sans w-full font-semibold md:mb-4">
              {editSpaceName ? (
                <input
                  maxLength={150}
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
              {!editSpaceName && (
                <Icon
                  icon="lucide:pen"
                  className="opacity-0 h-4 w-4 mt-5 ml-2 cursor-pointer group-hover:opacity-50"
                  onClick={handleIconClick}
                />
              )}
            </div>
            <div className="w-full flex md:mt-0 mt-3">
              <SpaceDescription />
            </div>
          </div>
          <div className="hidden md:flex flex-row my-6 md:my-0 space-x-2 items-center">
            <ShareSpace />
            {spacePersmission === "owner" && <AddContent />}
          </div>
          <div className=" md:hidden flex flex-row my-6 md:my-0 space-x-2 items-center">
            {spacePersmission === "owner" && <AddContent />}
            <ShareSpace />
          </div>
        </div>
        <div className="text-right text-sm w-full mt-0 md:mt-2 lg:mt-6 mb-2">
          <span>
            {contents && contents.contents && contents.contents
              ? contents.contents.length
              : 0}{" "}
            {contents && contents.contents && contents.contents.length > 1
              ? "contents"
              : "content"}
          </span>
        </div>
      </div>
      <div className="border-[.5px] sm:mx-24 mx-10 dark:border-neutral-800" />
    </>
  );
};

export default SpaceHeader;
