import React from 'react'
import Notification from '../notification'
import Account from '../account'
import Folders from './folders'
import MenuFooter from '@/ui/footer/menu-footer'

const MenuItems = () => {
  return (
    <div className='mt-4 flex flex-col h-screen space-y-4'>
      <div className='flex flex-row w-full justify-between cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-[10px]'>
        <Notification/>
        <span className='mt-1'>Notifications</span>
      </div>
      <div className='flex flex-row w-full justify-between cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-[10px]'>
        <Account name='Achyut' description='@achyut'/>
        <span>Account</span>
      </div>
      <div className='horizontal-line'/>
      <Folders/>
      <div className='flex-grow'/>
      <MenuFooter/>
    </div>
  )
}

export default MenuItems