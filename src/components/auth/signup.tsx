'use client'
import React from 'react'
import Steps from './steps';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter()
  return (
    <div className='flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center'>
      <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-lg items-center justify-center">
        <div className="p-8 space-y-4 max-w-md w-full"> 
          <Steps/>
          <div className="h-full mt-5 flex items-center justify-start font-black">
            <p className="text-sm dark:text-neutral-500 mr-2 ">
                Already have an account?
            </p>
            <button
                className="dark:text-secondary text-[#3dce5a] font-thin rounded-xl text-sm"
                onClick={() => router.push('/signin')}
            >
                Sign in here.
            </button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default SignUp