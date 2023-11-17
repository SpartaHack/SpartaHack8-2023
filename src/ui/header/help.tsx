'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Help = () => {

  return (
    <div className='flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
      <Icon icon="material-symbols:help-outline" className='h-6 w-6'/>
      <span className='ml-5'>
          Help
      </span>
    </div>
  )
}

export default Help

