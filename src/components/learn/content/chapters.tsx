import React from "react";
import ChapterTimeline from "./chapter-timeline";
import { ScrollShadow } from "@nextui-org/react";
import { useLearnStore } from "@/context/learn-context";
import useChapters from "@/hooks/use-chapters";
import { ChapersProps } from "../../../../types";

const Chapters = ({ contentId }: ChapersProps) => {
  const { updateLearnContent } = useLearnStore();
  const handleSourcing = (source: string) => {
    updateLearnContent({ source: source });
  };
  const { chapters } = useChapters(handleSourcing, contentId);
  return (
    <div className="mx-5 pb-3">
      <h3 className="font-extrabold my-5 mb-6 text-xl">Chapters</h3>
      <ScrollShadow
        className="pl-1 max-h-[50vh] md:max-h-[40vh] overflow-y-auto"
        hideScrollBar
      >
        <ChapterTimeline chapters={chapters} />
      </ScrollShadow>
    </div>
  );
};

export default Chapters;
