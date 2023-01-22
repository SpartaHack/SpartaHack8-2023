import React from 'react'
import LinkIcon from '../icons/LinkIcon'
import AccordianComponent from '../ui/Accordian/AccordianComponent'
import SectionHeading from './SectionHeading'

function FaqSection() {

  const faqData = [
    {
      "id": 1,
      "question": "What is SpartaHack 8?",
      "answer": <p>Spartahack 8 is a 24-hour programming marathon and competition held in the<a
        href="https://goo.gl/maps/1YEu9RTd7FkPQ8NJA" target="_blank" rel="noopener noreferrer"
        className='text-sky-400' ><span> STEM Building</span><LinkIcon width="14" height="14" strokeColor="#38bdf8" className="inline align-middle ml-1" /></a > at Michigan State University on the weekend of January 28-29<span className='align-top text-xs'>th</span>. We provide tons of meals, snacks, nap spaces, and swag; all free of cost so all you need to worry about is making something cool.</p>
    },
    {
      "id": 2,
      "question": "What to expect at SpartaHack 8?",
      "answer": <p>At SpartaHack 8, participants work in teams to collaborate on an innovative project. Every team has 24 hours to complete and pitch their project for the judges. Alongside this, SpartaHack 8 will host a variety of workshops, tech-talks, networking events, and fun activities!</p>
    },
    {
      "id": 3,
      "question": "Who can apply?",
      "answer": <p>Anyone who is currently a student in any field and level, or has graduated within 12 months of SpartaHack 8. All participants must adhere to the<a
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"
        className='text-sky-400 opacity-80' ><span> MLH Code of Conduct</span><LinkIcon width="14" height="14" strokeColor="#38bdf8" className="inline align-middle ml-1" /></a ></p>
    },
    {
      "id": 4,
      "question": "Do I have to know how to code to attend SpartaHack 8?",
      "answer": <p>Absolutely not! Many participants come in with no experience. The SpartaHack 8 team is here to guide you to make your project ideas come to life. You’ll have lots of resources before and during the event so you have nothing to worry about.</p>
    },
    {
      "id": 5,
      "question": "How many people can be in a team?",
      "answer": <p>Each team is allowed to have up to 4 people. There is no requirement for minimum participants in a team, so you can decide to hack on your own!</p>
    },
    {
      "id": 6,
      "question": "What do I do if I don’t have a team?",
      "answer": <p>All accepted applicants will be invited to a Discord server where they can network with other participants and form teams before the event. Additionally, SpartaHack 8 will offer a team match-making event prior to hacking.</p>
    },
    {
      "id": 7,
      "question": "How do I win a prize?",
      "answer": <p>SpartaHack 8 will offer thousands of dollars in numerous exciting prizes for teams that present innovative projects created during the course of the event. The categories for prizes will be revealed during the event.</p>
    },
    {
      "id": 8,
      "question": "Can I attend SpartaHack 8 virtually?",
      "answer": <p>To guarantee the best experience for all our participants, SpartaHack 8 will be held exclusively in-person this year.</p>
    },
    {
      "id": 9,
      "question": "When do applications close?",
      "answer": <p>Applications will remain open until the day of the event.</p>
    },
    {
      "id": 10,
      "question": "What do I do after I apply?",
      "answer": <p>Sit back and start sharpening your hacking skills. We will review all applications carefully, and you will receive an email with our decision and further instructions within 2-4 weeks of your application.</p>
    },
    {
      "id": 11,
      "question": "I have more questions!",
      "answer": <p>Email us at <span className='select-all cursor-pointer text-sky-400/80'>hello@spartahack.com</span> and one of our organizers will reach out to you.</p>
    },
  ]

  return (
    <div className='w-full flex flex-col items-center'>
      <SectionHeading text="FAQs" />
      <AccordianComponent data={faqData} />
    </div>
  )
}

export default FaqSection