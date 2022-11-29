import React from 'react'

function SuccessIcon(props) {
  return (
    <div className='h-full flex flex-row items-center justify-center'>
      <svg className={props.svgClasses}
        width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="47" stroke={props.strokeColor} stroke-width="6"/>
<path d="M72.6562 34.375L39.7 67.3312L25 52.6311" stroke={props.strokeColor} stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )
}

export default SuccessIcon