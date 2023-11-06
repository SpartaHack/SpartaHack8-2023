'use client'
import React from 'react'
import PriceCard from '@/helpers/price-card'
import { freePlanBenefits, premiumMonthlyPlanBenefits } from '../../../utils/constants'

const Upgrade = () => {
  return (
    <>
      <div className='mt-20 w-full lg:h-screen flex items-center justify-center text-center'>
      <span className='text-[40px] lg:text-[140px] font-bold lg:mb-[180px]'>Choose Your Plan</span>
      </div>
      <div className='flex flex-col mt-[100px] pb-[50px] lg:pb-[100px] lg:mt-[150px] lg:flex-row lg:justify-center lg:space-x-[100px] lg:space-y-0 space-y-[100px] items-center w-full'>
        
          <PriceCard 
            price='Free'
            subTitle='Free Forever.'
            planBenefits={freePlanBenefits}
            buttonText='Start for Free'
            route=''
          />

          <PriceCard 
            price='$7.99'
            subTitle='Best for beginners.'
            planBenefits={premiumMonthlyPlanBenefits}
            buttonText='Start your 14-day free trail'
            route='premium_monthly'
          />
        
      </div>
    </>
  )
}

export default Upgrade