"use client";
import CustomAccordion from "@/helpers/custom-accordion";
import { Timeline } from "flowbite-react";
import { timelineTheme } from "../../../../utils";

const datas = [
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">1:30</span>
          <h3 className="">Exploring Nature</h3>
        </div>
      ),
      content: <p className="text-sm">Discover the beauty of nature in this section.</p>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">2:45</span>
          <h3 className="">Fitness Journey</h3>
        </div>
      ),
      content: "Learn effective exercises for a healthy lifestyle.",
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">0:55</span>
          <h3 className="">Cooking Adventures</h3>
        </div>
      ),
      content: <div>Explore new recipes and cooking techniques in this section.</div>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">3:20</span>
          <h3 className="">Travel Diaries</h3>
        </div>
      ),
      content: <div>Embark on exciting journeys and explore different cultures.</div>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">1:10</span>
          <h3 className="">Artistic Creations</h3>
        </div>
      ),
      content: <div>Express your creativity with various art forms in this section.</div>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">2:05</span>
          <h3 className="">Technology Insights</h3>
        </div>
      ),
      content: <div>Stay updated on the latest tech trends and innovations.</div>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">0:45</span>
          <h3 className="">Health and Wellness Tips</h3>
        </div>
      ),
      content: <div>Discover valuable tips for maintaining a healthy and balanced lifestyle.</div>,
    },
    {
      title: (
        <div className="flex flex-col">
          <span className="text-sm font-extrabold">1:50</span>
          <h3 className="">DIY Projects</h3>
        </div>
      ),
      content: <div>Create amazing DIY projects with step-by-step guides.</div>,
    },
  ];
  
const itemClasses = {
  base: "p-0",
  title: "py-1",
  trigger: "px-1 py-0",
  content: "text-small pl-1 pb-2 pt-0",
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
