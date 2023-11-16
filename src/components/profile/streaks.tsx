import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Streaks = () => {
  const data = [
    { icon: "akar-icons:fire", value: 9, label: "Max Streak" },
    { icon: "heroicons:sparkles", value: 1, label: "Contents Created" },
    { icon: "ph:person-simple-run", value: 8, label: "Total Active Days" },
  ]

  return (
    <div className='flex-col flex md:flex-row space-y-5 lg:space-y-0 lg:mt-7'>
      {data.map((item, index) => (
        <div key={index} className='flex-col flex text-center w-full'>
          <div className='flex flex-row justify-center'>
            <Icon icon={item.icon} className='h-[90px] w-[90px]'/>
            <span className='text-[70px] mt-1 lg:mt-0'>{item.value}</span>
          </div>
          <h1 className='text-sm ml-4'>{item.label}</h1>
        </div>
      ))}
    </div>
  )
}

export default Streaks