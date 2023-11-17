'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { CustomDropdown } from '@/helpers/custom-dropdown'
import { NotificationData } from '@/functions/dropdown-contsants'

const Notification = () => {

  return (
    <div className='cursor-pointer mt-1 mr-5'>
      <CustomDropdown title={NotificationData.title} sections={NotificationData.sections}/>
    </div>
  )
}

export default Notification

