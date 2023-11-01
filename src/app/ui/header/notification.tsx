'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Tooltip } from '@nextui-org/react'
import React from 'react'
import { CustomDropdown } from '@/app/helpers/custom-dropdown'

const Notification = () => {

  const data = {
    title: <Icon icon="mingcute:notification-line" className='header-icons h-6 w-6'/>,
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
    <Tooltip content="Notifications">
      <div className='cursor-pointer ml-3 mr-2'>
        <CustomDropdown title={data.title} sections={data.sections}/>
      </div>
    </Tooltip>
  )
}

export default Notification

