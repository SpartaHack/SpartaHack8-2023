import React from 'react'

function BasicInfoCard(props) {
  return (
    <div className='w-fit flex flex-col justify-center items-center'>
      <div className='mb-6'>
        {props.cardIcon}
      </div>
      <div className='rubik-font font-medium text-sh-pink text-xl sm:text-2xl uppercase'>
        {props.cardHeading}
      </div>
      <div className='inter-font font-light text-sh-white/50 text-md sm:text-lg mt-2 sm:mt-0'>
        {props.cardText}
      </div>
    </div>
  )
}

export default BasicInfoCard