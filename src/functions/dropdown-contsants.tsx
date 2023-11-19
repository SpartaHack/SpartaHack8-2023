import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const NotificationData = {
    title: (
        <div className='flex flex-row'>
            <Icon icon="ri:notification-line" className='h-6 w-6 '/>
            <div className='lg:hidden'>
                <span className='ml-5 mt-1'>Notification</span>
            </div>
        </div>
    ),
    sections: [
      {
        label: 'Section 1', 
        items: [
          {label: 'Welcome to YouLearn! A Github for your courses.', clickEvent: () => console.log("Clicked on WebDev")}, 
        ]
      },
    ]
  }
