import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { getUserSpaceResponse } from "../../../types";
import { updateSpace } from "@/app/api/space";
import { auth } from "../../../db/firebase";
import { useSpaceStore } from "@/context/space-context";
import { toast } from "sonner";
import useAuth from "@/hooks/use-auth";

const SpaceDescription = () => {
  const userId = useAuth();
  const contentsFromStore = useStore(
    useContentStore,
    (state) => state.contents,
  );
  const [contents, setContents] = useState(contentsFromStore);
  
  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);

  const description =
    contents &&
    contents.space &&
    contents.space.description !== undefined &&
    contents.space.description !== ""
      ? contents.space.description
      : "No description";
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [editSpaceDescription, setEditSpaceDescription] = useState(false);
  const [spaceDescriptionInput, setSpaceDescriptionInput] =
    useState(description);

  const maxLength = window.innerWidth <= 600 ? 60 : 230;
  const isOverMaxLength = description.length > maxLength;

  const displayText = showFullDescription
    ? description
    : `${description.slice(0, maxLength)}`;

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpaceDescriptionInput(e.target.value);
  };

  const handleIconClick = () => {
    setSpaceDescriptionInput(description);
    setEditSpaceDescription(true);
  };

  const handleInputBlur = async () => {
    setEditSpaceDescription(false);
    if (spaceDescriptionInput !== description) {
      const updatedDataSpace = {
        _id: contents.space._id,
        description: spaceDescriptionInput,
      } as Partial<getUserSpaceResponse>;

      const updatedData = {
        _id: contents.space._id,
        description: spaceDescriptionInput,
      };

      const response = await updateSpace(
        auth.currentUser?.uid! || userId!,
        contents.space._id,
        contents.space.name,
        spaceDescriptionInput,
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

  return (
    <div className="flex flex-col w-full">
      <div
        className={`line-clamp-2 w-full text-neutral-500 dark:text-neutral-400 flex break-words ${
          isOverMaxLength && "cursor-pointer"
        }`}
        onClick={isOverMaxLength ? handleToggleDescription : undefined}
      >
        <div className="group w-full flex flex-row">
          {!editSpaceDescription ? (
            <>{displayText}</>
          ) : (
            <input
              maxLength={300}
              className="outline-none flex font-sans text-neutral-400 w-full bg-transparent"
              type="text"
              value={spaceDescriptionInput}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          )}
          {!editSpaceDescription && (
            <Icon
              icon="lucide:pen"
              className="opacity-0 h-4 w-4 mt-1 ml-2 cursor-pointer group-hover:opacity-50"
              onClick={handleIconClick}
            />
          )}
        </div>
      </div>
      {isOverMaxLength && (
        <button
          onClick={handleToggleDescription}
          className="text-neutral-500 text-left"
        >
          {showFullDescription ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default SpaceDescription;
