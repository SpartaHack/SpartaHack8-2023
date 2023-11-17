import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const NotificationData = {
    title: <Icon icon="mingcute:notification-line" className='h-6 w-6'/>,
    sections: [
      {
        label: 'Section 1', 
        items: [
          {label: 'Welcome to YouLearn! A Github for your courses.', clickEvent: () => console.log("Clicked on WebDev")}, 
        ]
      },
    ]
  }
