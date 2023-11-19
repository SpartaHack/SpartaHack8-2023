import CustomAccordion from '@/helpers/custom-accordion'
import { Link } from '@nextui-org/react';
import React from 'react'

export const faqData = [
    {
        title: "What is the capital of France?",
        content: <h1>Paris</h1>,
        subtitle: <h3>Geography</h3>,
    },
    {
        title: "Who wrote 'To Kill a Mockingbird'?",
        content: <h1>Harper Lee</h1>,
        subtitle: <h3>Literature</h3>,
    },
    {
        title: "What is the chemical symbol for Hydrogen?",
        content: <h1>H</h1>,
        subtitle: <h3>Chemistry</h3>,
    },
    {
        title: "Who painted the Mona Lisa?",
        content: <h1>Leonardo da Vinci</h1>,
        subtitle: <h3>Art</h3>,
    },
    {
        title: "What is the square root of 81?",
        content: <h1>9</h1>,
        subtitle: <h3>Mathematics</h3>,
    },
  ];

const FAQ = () => {
  return (
    <div className='flex flex-col pt-12'>
        <h1 className='text-3xl font-bold text-center'>Frequenly Asked Questions</h1>
        <h1 className='mt-8 lg:mb-12 mb-10 text-center'>Can't find the answer here?
            &nbsp; 
            <Link href='https://www.youlearn.ai/feedbackApp' underline='always' color='foreground'>
                Contact Support
            </Link>
        </h1>
        <div className='px-12'>
            <CustomAccordion accordionData={faqData}/>
        </div>
    </div>
  )
}

export default FAQ