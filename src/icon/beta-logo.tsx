"use client"
import React from 'react'
import { CustomButton } from '../helpers/custom-btn'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'

const BetaElement = (
  <div className='flex flex-row justify-between'>
    <h1>Beta Version</h1>
    <Icon icon="heroicons:arrow-top-right-on-square-20-solid" className='w-3 ml-1 h-3 font-bold mt-0.5'/>
  </div>
)

const BetaLogo = () => {
  const router = useRouter();
  
  return (
    <>
      <div className='ml-2 hidden lg:block'>
        <CustomButton 
          title={BetaElement} 
          size='sm'
          btnType="button"
          btnStyling='text-xs bg-transparent border-2 dark:border-secondary border-primary dark:text-secondary text-primary'
          popOver
          popOverTitle='Give Feedback'
          popOverClickEvent={() => router.push('https://www.youlearn.ai/feedbackApp')}
          popOverStyling='cursor-pointer'
        />
      </div>
    </>
  )
}

export default BetaLogo