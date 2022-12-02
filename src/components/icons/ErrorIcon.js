import React from 'react'

function ErrorIcon(props) {
  return (
    <div className='h-full flex flex-row items-center justify-center'>
      <svg className={props.svgClasses}
        width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.7625 102.712C81.1146 102.712 103.288 80.5386 103.288 53.1864C103.288 25.8343 81.1146 3.66101 53.7625 3.66101C26.4103 3.66101 4.23706 25.8343 4.23706 53.1864C4.23706 80.5386 26.4103 102.712 53.7625 102.712Z" stroke={props.strokeColor} stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 28L54 61" stroke={props.strokeColor} stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.7625 79H53.812" stroke={props.strokeColor} stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )
}

export default ErrorIcon