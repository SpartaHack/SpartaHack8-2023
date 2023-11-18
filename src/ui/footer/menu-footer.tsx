import React from 'react'
import Help from '../header/help'

const MenuFooter = () => {
  return (
    <div className='flex-col flex'>
        <Help/>
        <div className='flex flex-row space-x-4 py-2 text-[12px]'>
            <span className='font-light lg:mt-4'>@2023 YouLearn, Inc</span>
        </div>
    </div>
  )
}

export default MenuFooter