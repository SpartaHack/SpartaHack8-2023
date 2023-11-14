'use client'
import React from 'react'
import PriceCard from '@/helpers/price-card'
import { freePlanBenefits, premiumMonthlyPlanBenefits } from '@/functions/tier-constants';
import { getCheckoutUrl } from '@/functions/get-checkout-url';
import { initFirebase } from '../../../db/firebase';
import { useRouter } from 'next/navigation';


const Upgrade = () => {
  const router = useRouter()

  const handlePro = async () => {
    const app = initFirebase()
    const priceId = 'price_1OCV32K8Jk6Q3TjG3W5GBmWW';
    const checkoutURL = await getCheckoutUrl(app, priceId)
    router.push(checkoutURL)
  }

  return (
    <>
      <div 
        className='mt-[50px] lg:mt-20 w-full flex items-center justify-center text-center'
      >
        <span 
          className='text-[40px] lg:mb-[50px] mb-[45px] font-bold'
        >
          Pricing
        </span>
      </div>
      <div className='flex flex-col lg:mt-10 mb-[50px] lg:flex-row lg:justify-center lg:space-x-[100px] lg:space-y-0 space-y-[100px] items-center w-full'>
        
          <PriceCard 
            price='Free'
            subTitle='Free Forever.'
            planBenefits={freePlanBenefits}
            buttonText='Start for Free'
            handleClick={() => router.push('/')}
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
            handleClick={handlePro}
          />
        
      </div>
    </>
  )
}

export default Upgrade