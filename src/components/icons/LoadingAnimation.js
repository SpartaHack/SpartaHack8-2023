import React from 'react'

function LoadingAnimation(props) {
  return (
    <div className='h-full flex flex-row items-center justify-center'>
      <svg className={props.svgClasses} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 50" enableBackground="new 0 0 0 0">
        <circle fill="#f70063 " stroke="none" cx="30" cy="25" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1" />
        </circle>
        <circle fill="#f70063 " stroke="none" cx="50" cy="25" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2" />
        </circle>
        <circle fill="#f70063 " stroke="none" cx="70" cy="25" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3" />
        </circle>
      </svg>
    </div>
  )
}

export default LoadingAnimation