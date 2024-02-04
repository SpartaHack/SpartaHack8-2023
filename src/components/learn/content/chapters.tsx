import React from "react";
import ChapterTimeline from "./chapter-timeline";

const Chapters = () => {
  return (
    <div className="mx-5">
      <h3 className="font-extrabold my-5 mb-6 text-xl">
        Chapters
      </h3>
      <div className="ml-1">
        <ChapterTimeline />
      </div>
    </div>
  );
};

export default Chapters;
