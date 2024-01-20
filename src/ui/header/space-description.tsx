import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import React, { useEffect, useState } from "react";

const SpaceDescription = () => {
  const contentsFromStore = useStore(useContentStore, (state) => state.contents);
  const [contents, setContents] = useState(contentsFromStore);
  useEffect(() => {
    setContents(contentsFromStore);
  }, [contentsFromStore]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = contents && contents.space && contents.space.description !== undefined && contents.space.description !== "" ? contents.space.description : "No description";

  const maxLength = window.innerWidth <= 600 ? 80 : 160;
  const isOverMaxLength = description.length > maxLength;

  const displayText = showFullDescription
    ? description
    : `${description.slice(0, maxLength)}`;

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div
        className={`line-clamp-2 text-neutral-500 dark:text-neutral-400 flex break-words ${
          isOverMaxLength && "cursor-pointer"
        }`}
        onClick={isOverMaxLength ? handleToggleDescription : undefined}
      >
        {displayText}
      </div>
      {isOverMaxLength && (
        <button onClick={handleToggleDescription} className="text-neutral-500">
          {showFullDescription ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
};

export default SpaceDescription;
