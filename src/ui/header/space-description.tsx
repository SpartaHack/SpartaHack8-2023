import React, { useState } from "react";

const SpaceDescription = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = "Space Description ";

  const maxLength = window.innerWidth <= 600 ? 80 : 200;
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
        className={`line-clamp-2 flex break-words ${
          isOverMaxLength && "cursor-pointer"
        }`}
        onClick={isOverMaxLength ? handleToggleDescription : undefined}
      >
        {displayText}
      </div>
      {isOverMaxLength && (
        <button onClick={handleToggleDescription}>
          {showFullDescription ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
};

export default SpaceDescription;
