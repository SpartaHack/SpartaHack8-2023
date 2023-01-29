import React from 'react'
import DaySchedule from './DaySchedule'
import SectionHeading from './SectionHeading'

function ScheduleSection() {

  const scheduleData = {
    day1: [
      {
        time: "08:00AM - 09:45AM",
        events: [
          { name: "Participant Check In", location: "STEM 1130" },
          { name: "Sponsor/Guest Check In", location: "STEM 1202" },
          { name: "Breakfast", location: "STEM 1001" }]
      },
      {
        time: "10:00AM - 11:00AM",
        events: [{name: "Opening Ceremony", location: "Wells Hall B115"}]
      },
      {
        time: "11:00AM - 12:00PM",
        events: [{name: "Sponsor Expo", location: "STEM 1202"}]
      },
      {
        time: "12:00PM",
        events: [{name: "Hacking Begins"}]
      },
      {
        time: "12:00PM - 12:30PM",
        events: [{name: "Team Match-Making", location:"STEM 2130"}]
      },
      {
        time: "12:30PM - 01:00PM",
        events: [{name: "Topic Selection", location:"STEM 2130"}]
      },
      {
        time: "01:00PM - 02:00PM",
        events: [{ name: "Intro to AI Workshop", location: "STEM 1201" },
          {name: "Intro to Entrepreneurship Workshop", location:"STEM 2201"},
          {name: "Tech Talk by Mantel", location:"STEM 1130"}]
      },
      {
        time: "02:00PM - 03:30PM",
        events: [{name: "Lunch", location: "STEM 1001"}]
      },
      {
        time: "02:30PM - 03:30PM",
        events: [
          {name: "Snyk Cybersecurity Challenge (CTF)", location: "STEM 1201"},
          {name: "Intro to Web Dev Workshop", location: "STEM 2201"},
          {name: "Tech Talk by MSU IT", location: "STEM 1130"}]
      },
      {
        time: "03:30PM - 04:30PM",
        events: [
          
          { name: "Tech Talk by MSU FCU", location: "STEM 1130" },
        ]
      },
      {
        time: "04:30PM - 05:30PM",
        events: [
        { name: "Cup Stacking", location: "STEM 3202" },
        { name: "Tech Talk by Auto-Owners Insurance", location: "STEM 1130" }]
      },
      {
        time: "05:30PM - 06:30PM",
        events: [{name: "Tech Talk by Gerdau", location: "STEM 1130"}]
      },
      {
        time: "06:30PM - 07:30PM",
        events: [{name: "Tech Talk by TechSmith", location: "STEM 1130"}]
      },
      {
        time: "08:00PM - 09:30PM",
        events: [{name: "Dinner", location: "STEM 1001"}]
      },
      {
        time: "08:00PM - 09:00PM",
        events: [
          { name: "Tech Talk by Deloitte", location: "STEM 1130" },
          { name: "Tech Talk by Digital Ocean", location: "STEM 1130" }
        ]
      },
      {
        time: "10:00PM - 11:00PM",
        events: [{name: "Keynote Speaker: Prakhar Srivastav", location: "STEM 1130"}]
      },
    ],
    day2: [
      {
        time: "12:00AM",
        events: [{name: "Midnight Snack", location: "STEM 1001"}]
      },
      {
        time: "12:30AM - 02:00AM",
        events: [{name: "Keynote Speaker: Jay Freeman", location: "STEM 1130"}]
      },
      {
        time: "08:00AM - 10:00AM",
        events: [{name: "Breakfast", location: "STEM 1001"}]
      },
      {
        time: "09:00AM - 10:00AM",
        events: [{name: "Keynote Speaker: Steven Kneiser", location: "STEM 1130"}]
      },
      {
        time: "10:00AM - 11:00AM",
        events: [{name: "Keynote Speaker: David Giard", location: "STEM 1130"}]
      },
      {
        time: "11:00AM - 12:00PM",
        events: [{name: "Devpost Workshop", location: "STEM 1130"}]
      },
      {
        time: "12:00PM",
        events: [{name: "Hacking Ends"}]
      },
      {
        time: "12:30PM - 02:00PM",
        events: [{name: "Presentations", location: "STEM 2202, 2130"}]
      },
      {
        time: "02:00PM - 03:00PM",
        events: [{ name: "Judging", location: "STEM 1201" },
        {name: "Game Tournament", location: "STEM 3201, 3202"}]
      },
      {
        time: "02:00PM - 04:00PM",
        events: [{name: "Lunch", location: "STEM 1001"}]
      },
      {
        time: "03:00 - 04:00",
        events: [{name: "Closing Ceremony", location: "Wells Hall B115"}]
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