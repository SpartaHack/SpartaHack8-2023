import React from 'react'
import DaySchedule from './DaySchedule'
import SectionHeading from './SectionHeading'

function ScheduleSection() {

  const scheduleData = {
    day1: [
      {
        time: "08:00AM - 09:45AM",
        eventsName: "Check In | Breakfast"
      },
      {
        time: "10:00AM - 11:00AM",
        eventsName: "Opening Ceremony"
      },
      {
        time: "11:00AM - 12:00PM",
        eventsName: "Sponsor Expo"
      },
      {
        time: "12:00PM",
        eventsName: "Hacking Begins"
      },
      {
        time: "12:00PM - 12:30PM",
        eventsName: "Team Match-Making"
      },
      {
        time: "12:30PM - 01:00PM",
        eventsName: "Topic Selection"
      },
      {
        time: "01:00PM - 02:00PM",
        eventsName: "Intro to AI & Intro to Web Dev workshop | Tech Talk by Mantel"
      },
      {
        time: "02:00PM - 03:30PM",
        eventsName: "Lunch"
      },
      {
        time: "02:30PM - 03:30PM",
        eventsName: "Capture the Flag & Intro to Game Dev Workshop | Tech Talk by MSU IT"
      },
      {
        time: "03:30PM - 04:30PM",
        eventsName: "Tech Talk by MSU FCU"
      },
      // {
      //   time: "04:30PM - 05:30PM",
      //   eventsName: "Cup Stacking | Tech Talk by Auto-Owners Insurance"
      // },
      {
        time: "05:30PM - 06:30PM",
        eventsName: "Tech Talk by Gerdau"
      },
      {
        time: "06:30PM - 07:30PM",
        eventsName: "Tech Talk by TechSmith"
      },
      {
        time: "07:30PM - 09:00PM",
        eventsName: "Dinner"
      },
      {
        time: "08:00PM - 09:00PM",
        eventsName: "Tech Talk by Digital Ocean"
      },
      {
        time: "10:00PM - 11:00PM",
        eventsName: "Keynote Speaker: Prakhar Srivastav"
      },
    ],
    day2: [
      {
        time: "12:00AM - 03:00AM",
        eventsName: "Midnight Snack"
      },
      {
        time: "02:00AM - 03:00AM",
        eventsName: "Keynote Speaker: Jay Freeman"
      },
      {
        time: "08:00AM - 10:00AM",
        eventsName: "Breakfast"
      },
      {
        time: "11:00AM - 12:00PM",
        eventsName: "Devpost Workshop"
      },
      {
        time: "12:00PM",
        eventsName: "Hacking Ends"
      },
      {
        time: "12:00PM - 02:00PM",
        eventsName: "Presentations"
      },
      {
        time: "01:00PM - 03:00PM",
        eventsName: "Game Tournament"
      },
      {
        time: "02:00PM - 03:00PM",
        eventsName: "Judging"
      },
      {
        time: "02:00PM - 04:00PM",
        eventsName: "Lunch"
      },
      {
        time: "03:00 - 04:00",
        eventsName: "Closing Ceremony"
      },
    ]
  }


  return (
    <div className='w-full flex flex-col mt-4'>
      <SectionHeading text="Event Schedule" />
      <div className='sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12'>
        <DaySchedule title="January 28" dayInfo="Day 1 - Saturday" data={scheduleData.day1} />
        <DaySchedule title="January 29" dayInfo="Day 2 - Sunday" data={scheduleData.day2} />
      </div>
      <div className='mt-8 text-center rubik-font text-sh-white/50 text-sm uppercase tracking-wide'>
        Scroll to see full schedule
      </div>
    </div>
  )
}

export default ScheduleSection