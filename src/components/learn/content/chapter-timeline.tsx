"use client";
import CustomAccordion from "@/helpers/custom-accordion";
import { Timeline } from "flowbite-react";
import { timelineTheme } from "../../../../utils";

const datas = [
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <p className="text-sm">Content for section 1 goes here.</p>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: "Content for section 2 goes here.",
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="text-sm font-extrabold">0:00</span>
        <h3 className="">Bestie Intros</h3>
      </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
];

const itemClasses = {
  base: "p-0",
  title: "py-1",
  trigger: "px-1 py-0",
  content: "text-small border pl-1 pb-2 pt-0",
};

const ChapterTimeline = () => {
  return (
    <Timeline className="border-l-2" theme={timelineTheme}>
      {datas.map((data, index) => (
        <Timeline.Item
          key={index}
          className="hover:dark:bg-neutral-800 hover:bg-neutral-200 rounded-lg"
        >
          <Timeline.Point />
          <CustomAccordion
            accordionData={[data]}
            indicator={<></>}
            styling={itemClasses}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ChapterTimeline;
