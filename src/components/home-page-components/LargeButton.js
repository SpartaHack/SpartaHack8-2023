import React from 'react'

function LargeButton(props) {
  return (
    <div>
      <button className={'flex flex-row justify-center items-center w-full sm:w-auto sm:px-6 py-4 sm:py-3 gap-2 rounded-[8px] uppercase rubik-font font-light text-sh-white text-xl backdrop-blur-sm ' + props.buttonClass}>
        {props.buttonText}
      </button>
    </div>
  )
}

export default LargeButton