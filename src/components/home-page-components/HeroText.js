import React from 'react'

function HeroText() {
  return (
    <div className='mt-8 sm:mt-0 xl:-mt-8'>
      <div className='text-sh-white text-center'>
        <div className='rubik-font font-medium'>
          <span
            className="block text-[45px] md:text-[70px] lg:text-[76px] -mb-1 md:-mb-2 gradient-text">
            SpartaHack 8
          </span>
          <span
            className="block text-[39px] md:text-[64px] leading-[45px] md:leading-[70px]">
            registrations are <span className="whitespace-nowrap">now open.</span>
          </span>
        </div>
        <div className='mx-3 sm:mx-auto max-w-lg md:max-w-3xl inter-font font-light leading-8 mt-6 md:mt-4'>
          <span className='block text-[16px] md:text-[20px] opacity-70'>
            Take part in the 24-hour annual hackathon held at Michigan State University
            tailored for those who see opportunity in a challenge and <span className='hidden lg:inline'><br /></span> seek to
            widen their horizons.
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroText