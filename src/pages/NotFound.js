import React from 'react'
import { Link } from 'react-router-dom'
import LargeButton from '../components/home-page-components/LargeButton'
import Background from '../components/layouts/Background'

function NotFound() {
  return (
    <div className='relative'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background />
      </div>
      <main className="relative">
        <section id="login" className="mx-4 min-h-screen flex flex-col justify-center items-center">
          <div className='flex flex-col justify-center items-center mt-12 rubik-font'>
            <div className='uppercase text-xl text-sh-pink font-medium'>Error 404: URL not found</div>
            <div className='my-4 leading-none uppercase text-[100px] sm:text-[150px] md:text-[200px] font-bold stroke-text text-[#131313]'>oops!</div>
            {/* <div className='uppercase text-xl text-sh-pink font-medium'></div> */}
          </div>
          <div className=' max-w-xs sm:max-w-md text-center text-sh-white/80 tracking-wide text-lg font-light font-inter'>
            We couldn't find the page you're looking for.
          </div>
          <Link to="/" exact className='w-full flex justify-center mt-20 px-2'>
            <LargeButton buttonText="Return to home" buttonClass=" border border-sh-pink text-base sm:text-xl " />
          </Link>
        </section>
      </main>
    </div>
  )
}

export default NotFound