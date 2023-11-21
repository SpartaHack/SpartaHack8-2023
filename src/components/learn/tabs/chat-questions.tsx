import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export type ChatQuestionProps = {
    questions: string[],
    chatQuestionClick: (question: string) => void;
}

const ChatQuestions = ({ questions, chatQuestionClick }: ChatQuestionProps) => {
  return (
    <div className='flex flex-wrap'>
      {questions.map((question: string, index: number) => (
        <div key={index} className='w-full md:w-1/2 pt-3 md:px-1'>
          <div className='flex cursor-pointer text-neutral-500 dark:text-neutral-400 dark:border-neutral-400 hover:bg-secondary dark:hover:text-black dark:hover:border-black dark:hover-black border p-2 rounded-xl text-sm hover:text-black hover:border-absolute_white' onClick={() => chatQuestionClick(question)}>
            <Icon icon='ph:arrow-bend-down-right' className='flex-shrink-0 w-5 ml-1 h-5'/>
            <span className='ml-3'>
                {question}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatQuestions