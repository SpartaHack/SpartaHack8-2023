import React from 'react'
import Chevron from '../icons/Chevron'

function ScrollDownNudge(props) {
  return (
    <div className={'absolute bottom-6 sm:bottom-12 transition-all duration-200' + props.containerClass}>
      <div className='flex flex-col justify-center items-center gap-y-2 text-sh-white/50'>
        <span className='block uppercase rubik-font font-light text-xs'>scroll down to know more</span>
        <Chevron className="scale-x-[2] scale-y-[0.9]" height="16" strokeColor="rgb(245,245,245,0.5)" strokeWidth="2" />
      </div>
    </div>
  )
}

export default ScrollDownNudge