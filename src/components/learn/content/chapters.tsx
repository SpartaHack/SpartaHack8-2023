import React from "react";
import ChapterTimeline from "./chapter-timeline";
import { ScrollShadow } from "@nextui-org/react";

const Chapters = () => {
  return (
    <div className="mx-5 pb-3">
      <h3 className="font-extrabold my-5 mb-6 text-xl">Chapters</h3>
      <ScrollShadow className="pl-1 max-h-[50vh] overflow-y-auto" hideScrollBar>
        <ChapterTimeline />
      </ScrollShadow>
    </div>
  );
};

export default Chapters;
