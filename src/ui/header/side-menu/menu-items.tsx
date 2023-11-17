import React from 'react'
import Notification from '../notification'
import Account from '../account'
import Folders from './folders'
import MenuFooter from '@/ui/footer/menu-footer'

const MenuItems = () => {
  return (
    <div className='flex flex-col h-full space-y-4'>
      <div className='flex flex-row w-full lg:hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
        <Notification/>
      </div>
      <div className='flex flex-row w-full lg:hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl'>
        <Account name='Achyut' description='@achyut'/>
      </div>
      <div className='horizontal-line lg:hidden'/>
      <Folders/>
      <MenuFooter/>
    </div>
  )
}

export default MenuItems