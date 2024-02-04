'use client';
import CustomAccordion from '@/helpers/custom-accordion';
import { Timeline } from 'flowbite-react';
import { timelineTheme } from '../../../../utils';
import { ScrollShadow } from '@nextui-org/react';

const datas = [
  {
    title: (
        <div className='flex flex-col'>
            <span className='text-sm font-extrabold'>0:00</span>
            <h3 className=''>Bestie Intros</h3>
        </div>
    ),
    content: <p>Content for section 1 goes here.</p>,
  },
  {
    title: (
        <div className='flex flex-col'>
            <span className='text-sm font-extrabold'>0:00</span>
            <h3 className=''>Bestie Intros</h3>
        </div>
    ),
    content: "Content for section 2 goes here.",
  },
  {
    title: (
        <div className='flex flex-col'>
            <span className='text-sm font-extrabold'>0:00</span>
            <h3 className=''>Bestie Intros</h3>
        </div>
    ),
    content: <div>Content for section 3 goes here.</div>,
  },
];

const ChapterTimeline = () => {
  return (
    <Timeline className='border-l-2' theme={timelineTheme}>
    {datas.map((data, index) => (
        <Timeline.Item key={index} className='hover:dark:bg-neutral-800 pl-2 hover:bg-neutral-200 rounded-lg'>
        <Timeline.Point />
        <CustomAccordion accordionData={[data]} indicator={<></>}/>
        </Timeline.Item>
    ))}
    </Timeline>
  );
};

export default ChapterTimeline;
