import Chat from "@/components/learn/tabs/chat";
import Summary from "@/components/learn/tabs/summary";
import Quiz from "@/components/learn/tabs/quiz";

export const TabOptions = [
    {
      label: "Chat",
      content: <Chat/>
    },
    {
      label: "Summary",
      content: <Summary/>
    },
    {
      label: "Quiz",
      content: <Quiz />
    }
];

export const defaultCourseContent = [
  {
    "type": "youtube",
    "contentID": "3bKuoH8CkFc", // The Future of Quantum Computing
    "title": "Introduction to Quantum Computing",
    "thumbnail": "https://img.youtube.com/vi/3bKuoH8CkFc/maxresdefault.jpg"
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
  {
    "type": "pdf",
    "contentID": "GPT_4_Technical_Report",
    "title": "GPT 4 Technical Report",
    "thumbnail": "https://image.thum.io/get/https://cdn.openai.com/papers/gpt-4.pdfhttps://www.wikipedia.org/"
  },
  {
    "type": "pdf",
    "contentID": "GPT_4_Technical_Report",
    "title": "GPT 4 Technical Report",
    "thumbnail": "https://image.thum.io/get/https://cdn.openai.com/papers/gpt-4.pdfhttps://www.wikipedia.org/"
  },
]