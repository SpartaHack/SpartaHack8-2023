import React from 'react'
import { CustomButton } from '@/helpers/custom-btn'
import { PriceCardProps } from '../../types'
import { useRouter } from 'next/navigation'
  
const PriceCard = ({ price, subTitle, planBenefits, buttonText, handleClick }: PriceCardProps) => {
  const router = useRouter();
  return (
    <div className='rounded-[10px] justify-between bg-white dark:bg-neutral-900 w-[75%] lg:h-[450px] h-[320px] px-[60px] lg:w-[40%] shadow-xl border dark:border-none p-3 text-center cursor-pointer hover:scale-105 transition duration-500'>
        <h1 className='text-3xl mt-5 lg:mt-7 font-extrabold'>
            {price}
          </h1>
        <h2 className='my-2 lg:text-[15px] text-primary lg:my-6 mb-5 lg:mb-8'>{subTitle}</h2>
        {planBenefits.map((benefit, index) => (
          <div className='flex flex-row w-full justify-between' key={index}>
            {benefit.icon}
            <span className='mb-2 lg:mb-5 lg:text-lg text-[12px]'>{benefit.label}</span>
          </div>
        ))}
      <CustomButton 
        btnStyling='mt-5 w-full bg-tertiary bg-black dark:bg-white dark:text-black text-white font-semibold'
        title={buttonText} 
        btnType='button'
        clickEvent={handleClick}
      />  
    </div>
  )
}

export default PriceCard