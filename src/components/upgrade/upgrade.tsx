'use client'
import React, { useRef } from 'react'
import PriceCard from '@/helpers/price-card'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { freePlanBenefits, premiumMonthlyPlanBenefits } from '../../../utils/constants'
import useTitleResizeOnScroll from '@/hooks/use-title-resize';

gsap.registerPlugin(ScrollTrigger)

const Upgrade = () => {
  const titleRef = useRef(null)

  useTitleResizeOnScroll(titleRef)

  return (
    <>
      <div 
        className='mt-20 w-full flex items-center justify-center text-center'
      >
        <span 
          className='text-[50px] mb-[50px] lg:mb-0 font-bold'
        >
          Pricing
        </span>
      </div>
      <div className='flex flex-col lg:mt-20 lg:flex-row lg:justify-center lg:space-x-[100px] lg:space-y-0 space-y-[100px] items-center w-full'>
        
          <PriceCard 
            price='Free'
            subTitle='Free Forever.'
            planBenefits={freePlanBenefits}
            buttonText='Start for Free'
            route=''
          />

          <PriceCard 
            price={
              <>
               $7.99 &nbsp;
               <span className='font-light lg:text-[18px] text-[15px]'>/month</span>
              </>
            }
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