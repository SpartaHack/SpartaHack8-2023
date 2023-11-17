import React from 'react'
import Help from '../header/help'

const MenuFooter = () => {
  return (
    <div className='flex-col flex'>
        <Help/>
        <div className='hidden lg:block text-[12px] lg:mt-5'>
            <div className='flex flex-row pt-2 space-x-4'>
                <span className='font-semibold cursor-pointer'>About</span>
                <span className='font-semibold cursor-pointer'>Press</span>
                <span className='font-semibold cursor-pointer'>Copyright</span>
            </div>
            <div className='flex flex-row space-x-4'>
                <span className='font-semibold cursor-pointer'>Contact us</span>
                <span className='font-semibold cursor-pointer'>Advertise</span>
                <span className='font-semibold cursor-pointer'>Devs</span>
            </div>
            <div className='flex flex-row space-x-4'>
                <span className='font-semibold cursor-pointer'>Terms</span>
                <span className='font-semibold cursor-pointer'>Privacy</span>
                <span className='font-semibold cursor-pointer'>Policy</span>
            </div>
        </div>
        <div className='flex flex-row space-x-4 py-2 text-[12px]'>
            <span className='font-light mt-2 md:mt-0'>@2023 YouLearn, Inc</span>
        </div>
    </div>
  )
}

export default MenuFooter