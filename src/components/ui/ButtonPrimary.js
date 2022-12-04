import React from 'react'
import { useLocation } from 'react-router-dom'

function ButtonPrimary(props) {

    const location = useLocation()

  const currentPageReturn = (e) => {
    props.onClick(e)
  }

  return (
    <button className='flex flex-row justify-center items-center px-3 sm:px-4 py-3 sm:py-2 gap-2 bg-sh-blue hover:bg-blue-500 rounded-[4px] uppercase rubik-font font-light text-sh-white text-sm sm:text-base transition-all duration-75'
    onClick={currentPageReturn}>
      {props.buttonText}
    </button>
  )
}

export default ButtonPrimary