'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { CustomDropdown } from '@/helpers/custom-dropdown'

const Help = () => {

  const data = {
    title: <Icon icon="material-symbols:help-outline" className='h-6 w-6'/>,
    sections: [
      {
        label: 'Section 1', 
        items: [
          {label: 'Welcome to YouLearn! A Github for your courses.', clickEvent: () => console.log("Clicked on WebDev")}, 
        ]
      },
    ]
  }

  return (
    <div className='cursor-pointer mt-1 mr-10'>
      <CustomDropdown title={data.title} sections={data.sections}/>
    </div>
  )
}

export default Help

