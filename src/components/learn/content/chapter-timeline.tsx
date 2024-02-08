"use client";
import { Timeline } from "flowbite-react";
import { timelineTheme } from "../../../../utils";
import { Skeleton } from "@nextui-org/react";
import CustomAccordion from "@/helpers/custom-accordion";
import { ChapterTimelineProps } from "../../../../types";

const itemClasses = {
  base: "p-0",
  title: "py-1",
  trigger: "px-1 py-0",
  content: "text-small pl-1 pb-2 pt-0",
};

const ChapterTimeline = ({ chapters }: ChapterTimelineProps) => {
  return (
    <Timeline className="border-l-2" theme={timelineTheme}>
      {chapters && chapters.length !== 0 ? (
        chapters.map((chapter, index) => (
          <Timeline.Item
            key={index}
            className="hover:dark:bg-neutral-900 hover:bg-white rounded-lg"
          >
            <Timeline.Point />
            <CustomAccordion
              accordionData={[chapter]}
              indicator={<></>}
              styling={itemClasses}
            />
          </Timeline.Item>
        ))
      ) : (
        <Timeline.Item>
          {Array.from({ length: 10 }, (_, index) => (
            <div className="pb-4" key={index}>
              <Timeline.Point />
              <Skeleton className="flex flex-col h-12 md:h-20 rounded-lg" />
            </div>
          ))}
        </Timeline.Item>
      )}
    </Timeline>
  );
};

export default ChapterTimeline;
