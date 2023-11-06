import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CustomButton } from '@/helpers/custom-btn'
import { PriceCardProps } from '../../types'
import { useRouter } from 'next/navigation'
  
const PriceCard = ({ price, subTitle, planBenefits, buttonText, route }: PriceCardProps) => {
  const router = useRouter();
  return (
    <div className='rounded-[10px] w-[75%] h-[350px] px-[60px] lg:w-[40%] shadow-xl border p-3 text-center cursor-pointer hover:scale-105 transition duration-500 mb-[50px] lg:mb-[100px]'>
      <h1 className='text-3xl mt-5  font-extrabold'>{price}</h1>
      <h2 className='my-2 mb-5'>{subTitle}</h2>
      {planBenefits.map((benefit, index) => (
        <div className='flex flex-row w-full justify-between' key={index}>
          <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 mt-0.5 text-secondary'/>
          <span className='text-neutral-200 mb-2 text-sm'>{benefit}</span>
        </div>
      ))}
      <CustomButton 
        btnStyling='mt-5'
        title={buttonText} 
        btnType='button'
        clickEvent={() => router.push(`/${route}`)}
      />  
    </div>
  )
}

export default PriceCard