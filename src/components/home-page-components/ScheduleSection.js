import React from 'react'
import DaySchedule from './DaySchedule'
import SectionHeading from './SectionHeading'

function ScheduleSection() {

  const scheduleData = {
    day1: [
      {
        time: "0800-0945",
        events: ["Check In", "Breakfast"]
      },
      {
        time: "1000-1100",
        events: ["Opening Ceremony"]
      },
      {
        time: "1100-1200",
        events: ["Sponsor Expo"]
      },
      {
        time: "1200",
        events: ["Hacking Begins"]
      },
      {
        time: "1200-1230",
        events: ["Team Match-Making"]
      },
      {
        time: "1230-1300",
        events: ["Topic Selection"]
      },
      {
        time: "1300-1400",
        events: ["Intro to AI & Intro to Web Dev workshop", "Mantel"]
      },
      {
        time: "1400-1530",
        events: ["Lunch"]
      },
      {
        time: "1430-1530",
        events: ["Capture the Flag & Intro to Game Dev Workshop", "MSU IT"]
      },
      {
        time: "1530-1630",
        events: ["MSU FCU"]
      },
      {
        time: "1630-1730",
        events: ["Cup Stacking", "Auto-Owners Insurance"]
      },
      {
        time: "1730-1830",
        events: ["Gerdau"]
      },
      {
        time: "1830-1930",
        events: ["Tech Smith"]
      },
      {
        time: "1930-2100",
        events: ["Dinner"]
      },
      {
        time: "2000-2100",
        events: ["MSU College of Engineering"]
      },
      {
        time: "2100-2200",
        events: ["Digital Ocean"]
      },
      {
        time: "2200-2300",
        events: ["Prakhar Srivastav Talk"]
      },
    ],
    day2: [
      {
        time: "0000-0300",
        events: ["Midnight Snack"]
      },
      {
        time: "0000-0200",
        events: ["Game Tournament"]
      },
      {
        time: "0200-0300",
        events: ["Jay Freeman Talk"]
      },
      {
        time: "0800-1000",
        events: ["Breakfast"]
      },
      {
        time: "1200",
        events: ["Hacking Ends"]
      },
      {
        time: "1200-1400",
        events: ["Presentations"]
      },
      {
        time: "1400-1600",
        events: ["Lunch"]
      },
      {
        time: "1400-1500",
        events: ["Judging"]
      },
      {
        time: "1500-1600",
        events: ["Closing Ceremony"]
      },
    ]
  }


  return (
    <div className='w-full mt-24 flex flex-col'>
      <SectionHeading text="Event Schedule" />
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12'>
        <DaySchedule title="January 28" data={scheduleData.day1} />
        <DaySchedule title="January 29" data={scheduleData.day2} />
      </div>
      <div className='mt-6 text-center rubik-font text-sh-white/50 text-xs uppercase tracking-wide'>
        Scroll to see full schedule
      </div>
    </div>
  )
}

export default ScheduleSection