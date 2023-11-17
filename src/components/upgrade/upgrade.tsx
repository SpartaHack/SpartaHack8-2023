'use client'
import React, { useState } from 'react'
import PriceCard from '@/helpers/price-card'
import { freePlanBenefits, premiumMonthlyPlanBenefits } from '@/functions/tier-constants';
import { getCheckoutUrl } from '@/functions/get-checkout-url';
import { useRouter } from 'next/navigation';
import { Spinner } from '@nextui-org/react';
import { priceId } from '../../../utils/constants';

const Upgrade = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handlePro = async () => {
    setLoading(true)
    const checkoutURL = await getCheckoutUrl(priceId)
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
               $9.99 &nbsp;
               <span className='font-light lg:text-[18px] text-[15px]'>/month</span>
              </>
            }
            subTitle='Best for beginners.'
            planBenefits={premiumMonthlyPlanBenefits}
            buttonText={loading ? <Spinner size='sm' color='current'/> : "Start you 14 day free trial"}
            handleClick={handlePro}
          />
        
      </div>
    </>
  )
}

export default Upgrade