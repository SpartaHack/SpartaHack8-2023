'use client'
import React from 'react'
import PriceCard from '@/helpers/price-card'
import { freePlanBenefits, premiumMonthlyPlanBenefits } from '@/functions/tier-constants';
import { useRouter } from 'next/navigation';
import CustomModal from '@/helpers/custom-modal';
import upgradeModal from '@/functions/upgrade-modal';

const Upgrade = () => {
  const router = useRouter()

  return (
    <>
      <div 
        className='mt-[50px] dark:bg-neutral-900 lg:mt-12 w-full flex items-center justify-center text-center'
      >
        <div className='flex flex-col lg:pt-8 px-12'>
          <h1 className='text-3xl lg:text-5xl font-bold text-center font-sans'>Find a plan to enhance your learning</h1>
          <h1 className='mt-6 lg:mb-12 mb-10 text-center lg:text-base text-[12px] font-sans px-4'>Saves hours a day watching videos and reading articles, just a little investment to 10X your productivity.</h1>
        </div>
      </div>
      <div className='flex flex-col lg:mt-10 mb-[50px] lg:flex-row lg:justify-center lg:space-x-[100px] lg:space-y-0 space-y-[100px] items-center w-full'>
        
          <PriceCard 
          plan='Free'
            price={
              <>
               $0
               <span className='font-light lg:text-[18px] text-[15px]'> / month</span>
              </>
            }
            subTitle='Start your learning journey'
            planBenefits={freePlanBenefits}
            buttonText={"Get Started"}
            buttonStyle=' bg-white dark:bg-neutral-900 lg:mt-16 mt-5 mb-7 text-black dark:text-white font-semibold font-sans flex items-center justify-center rounded-xl h-[50.5px] w-full border-1 border-black dark:border-white'
            handleClick={() => router.push('/')}
          />

          <PriceCard 
            plan='Pro'
            price={
              <>
               $10
               <span className='font-light lg:text-[18px] text-[15px]'> / month</span>
              </>
            }
            subTitle='Everything in free plan, plus unlimited features'
            planBenefits={premiumMonthlyPlanBenefits}
            buttonText={<CustomModal placement='center' footer={false} title={<h1 className='h-[50.5px] text-center w-full flex items-center justify-center'>Start your 14 day free trail</h1>} contentMain={upgradeModal}/>}
            buttonStyle='bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl h-[50.5px] w-full'
          />
        
      </div>
    </>
  )
}

export default Upgrade