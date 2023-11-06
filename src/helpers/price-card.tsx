import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CustomButton } from '@/helpers/custom-btn'
import { PriceCardProps } from '../../types'
import { useRouter } from 'next/navigation'
  
const PriceCard = ({ price, subTitle, planBenefits, buttonText, route }: PriceCardProps) => {
  const router = useRouter();
  return (
    <div className='rounded-[10px] bg-white dark:bg-black backdrop-blur-md w-[75%] lg:h-[500px] h-[350px] px-[60px] lg:w-[40%] shadow-xl border dark:border-black p-3 text-center cursor-pointer hover:scale-105 transition duration-500'>
        <h1 className='text-3xl mt-5 lg:mt-7 font-extrabold'>
          {price}
        </h1>
      <h2 className='my-2 lg:text-[15px] text-primary lg:my-6 mb-5 lg:mb-8'>{subTitle}</h2>
      {planBenefits.map((benefit, index) => (
        <div className='flex flex-row w-full justify-between' key={index}>
          <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>
          <span className='mb-2 lg:mb-5 lg:text-lg text-[12px]'>{benefit}</span>
        </div>
      ))}
      <CustomButton 
        btnStyling='mt-5 w-full bg-tertiary bg-black font-semibold'
        title={buttonText} 
        btnType='button'
        clickEvent={() => router.push(`/${route}`)}
      />  
    </div>
  )
}

export default PriceCard