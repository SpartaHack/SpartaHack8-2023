'use client'
import React from 'react'
import Steps from './steps';

const SignUp = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-md items-center justify-center">
        <div className="p-8 space-y-4 max-w-md w-full"> 
          <Steps/>
        </div>
      </div>
    </div>
  )
}

export default SignUp