import { Icon } from "@iconify/react/dist/iconify.js";
import { Features } from "../types";

export const defaultCourseContent = [
  {
    "type": "youtube",
    "contentID": "3bKuoH8CkFc", // The Future of Quantum Computing
    "title": "Introduction to Quantum Computing",
    "thumbnail": "https://img.youtube.com/vi/3bKuoH8CkFc/maxresdefault.jpg"
  },
  {
    "type": "pdf",
    "contentID": "Attention_Is_All_You_Need",
    "title": "Attention Is All You Need",
    "thumbnail": "https://image.thum.io/get/https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf"
  },
  {
    "type": "youtube",
    "contentID": "MLU7qcMYKO8", // Stanford's Lecture on Startup Engineering
    "title": "Startup Engineering: Build a Software Startup",
    "thumbnail": "https://img.youtube.com/vi/GtOt7EBNEwQ/maxresdefault.jpg"
  },
  {
    "type": "youtube",
    "contentID": "rfscVS0vtbw", // Python Programming Beginner Tutorial by FreeCodeCamp
    "title": "Python Programming for Beginners",
    "thumbnail": "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg"
  },
  {
    "type": "youtube",
    "contentID": "W6NZfCO5SIk", // Calculus Introduction by Khan Academy
    "title": "Introduction to Calculus",
    "thumbnail": "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
  },
  {
    "type": "youtube",
    "contentID": "GtOt7EBNEwQ", // Introduction to Machine Learning by edureka!
    "title": "Machine Learning Basics",
    "thumbnail": "https://img.youtube.com/vi/GtOt7EBNEwQ/maxresdefault.jpg"
  },
  {
    "type": "youtube",
    "contentID": "5b9Z8toVaAU", // Human Anatomy and Physiology by Khan Academy
    "title": "Human Anatomy and Physiology Introduction",
    "thumbnail": "https://img.youtube.com/vi/5b9Z8toVaAU/maxresdefault.jpg"
  },
  {
    "type": "youtube",
    "contentID": "aircAruvnKk", // Introduction to Psychology
    "title": "Introduction to Psychology",
    "thumbnail": "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg"
  },
  {
    "type": "pdf",
    "contentID": "GPT_4_Technical_Report",
    "title": "GPT 4 Technical Report",
    "thumbnail": "https://image.thum.io/get/https://cdn.openai.com/papers/gpt-4.pdfhttps://www.wikipedia.org/"
  },
]

export const freePlanBenefits: Features[] = [
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Chat upto 10 content"},
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Upto AI 10 responses per content",},
  {icon: <Icon icon="mingcute:lock-line" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Beta Access to New Features",},
  {icon: <Icon icon="mingcute:lock-line" className='w-4 h-4 lg:w-5 lg:h-5 mt-1 text-tertiary dark:text-secondary'/>  , label: "Folder Chat Bot",},
]

export const premiumMonthlyPlanBenefits: Features[] = [
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Chat with unlimited videos & PDFS"},
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Unlimited AI responses"},
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Beta Access to New Features"},
  {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/> , label:  "Folder Chat Bot"},
]