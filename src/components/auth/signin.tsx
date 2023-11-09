import { CustomButton } from '@/helpers/custom-btn'
import React from 'react'
import SignInForm from './signin-form'

const SignIn = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-md items-center justify-center">
        <div className="p-8 space-y-4 max-w-md w-full"> 

          <h1 className="text-3xl text-left font-black">Welcome Back</h1>
          <p className="pb-10 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Sign in to continue learning
          </p>

          <CustomButton 
            title='Log in with Google' 
            btnType='button'
            btnStyling='border dark:text-white border-neutral-300 py-6 text-black font-bold flex items-center justify-center rounded-[10px] h-[50.5px] w-full'
          />

          <div className="flex items-center justify-center pt-8">
            <div className="border-t border-neutral-500 flex-grow dark:text-neutral-500"/>
            <span className="flex-row mx-2 text-neutral-500 dark:text-neutral-500 font-light text-sm">
              or continue with
            </span>
            <div className="border-t dark:text-neutral-500 border-neutral-500 flex-grow"/>
          </div>

          <SignInForm/>

        </div>
      </div>
    </div>
  )
}

export default SignIn