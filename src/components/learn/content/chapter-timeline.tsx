"use client";
import CustomAccordion from "@/helpers/custom-accordion";
import { Timeline } from "flowbite-react";
import { timelineTheme } from "../../../../utils";
import { useLearnStore } from "@/context/learn-context";
import useChapters from "@/hooks/use-chapters";

const itemClasses = {
  base: "p-0",
  title: "py-1",
  trigger: "px-1 py-0",
  content: "text-small pl-1 pb-2 pt-0",
};

const ChapterTimeline = () => {
  const { updateLearnContent } = useLearnStore();

  const handleSourcing = (source: string) => {
    updateLearnContent({ source: source });
  };

  const { chapters } = useChapters(handleSourcing);

  return (
    <Timeline className="border-l-2" theme={timelineTheme}>
      {chapters.map((chapter, index) => (
        <Timeline.Item
          key={index}
          className="hover:dark:bg-neutral-800 hover:bg-neutral-200 rounded-lg"
        >
          <Timeline.Point />
          <CustomAccordion
            accordionData={[chapter]}
            indicator={<></>}
            styling={itemClasses}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ChapterTimeline;
