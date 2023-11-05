import React from 'react'

const MenuFooter = () => {
  return (
    <div className='flex-col text-[12px] flex'>
        <div className='horizontal-line mb-4'/>
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
        <div className='flex flex-row space-x-4 py-2'>
            <span className='font-light'>@2023 YouLearn, Inc</span>
        </div>
    </div>
  )
}

export default MenuFooter