import React, { useState } from 'react';

const SpaceDescription = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = 'eDescription';

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div className={`line-clamp-2 ${showFullDescription ? 'line-clamp-none' : ''} break-words`}>
        {description}
      </div>
      <button onClick={toggleDescription}>
        {showFullDescription ? 'See Less' : 'See More'}
      </button>
    </>
  );
};

export default SpaceDescription;
