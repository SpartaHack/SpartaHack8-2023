"use client"
import React from 'react'
import { CustomButton } from '../helpers/custom-btn'
import { useRouter } from 'next/navigation'

const BetaLogo = () => {
  const router = useRouter();

  const betaClick = () => {
    router.push('/')  
  }
  
  return (
    <>
      <div className='ml-2 hidden lg:block'>
        <CustomButton 
            title="Beta Version" 
            btnType="button"
            btnStyling='text-xs dark:border-secondary dark:text-secondary border-[#174c22] text-[#174c22] dark:bg-black'
            popOver
            popOverTitle='Give Feedback'
            popOverStyling='cursor-pointer'
            clickEvent={betaClick}
        />
      </div>
    </>
  )
}

export default BetaLogo