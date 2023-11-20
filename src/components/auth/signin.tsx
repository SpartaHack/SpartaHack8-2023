'use client'
import { CustomButton } from '@/helpers/custom-btn'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import SignInForm from './signin-form'
import { useRouter } from 'next/navigation';
import { authGoogle } from '../../../utils';

const SignIn = () => {
  const router = useRouter();
  return (
    <div className='flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center'>
      <div className="w-full sm:w-3/5 flex p-8 space-y-4 max-w-lg items-center justify-center">
        <div className="p-8 space-y-4 max-w-md w-full"> 
          <h1 className="text-3xl text-left font-black">Welcome back</h1>
          <p className="pb-10 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Sign in to continue learning
          </p>
          <CustomButton 
            title={
              <div className='flex flex-row'>
                <Icon icon='flat-color-icons:google' className='h-5 w-5 mr-2'/>
                Log in with Google
              </div>
            }
            btnType='button'
            btnStyling='border-2 bg-transparent dark:border-neutral-500 dark:text-white border-neutral-300 py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full'
            clickEvent={() => authGoogle('signin')}
          />
          <div className="flex items-center justify-center pt-8 ">
            <div className="border-t border-neutral-600 flex-grow dark:text-neutral-500 mb-8"/>
            <span className="flex-row mx-2 text-neutral-500 dark:text-neutral-500 font-light text-sm mb-8">
              or continue with
            </span>
            <div className="border-t dark:text-neutral-500 border-neutral-500 flex-grow mb-8"/>
          </div>
          <SignInForm/>
          <div className="h-full mt-5 flex items-center justify-start font-black">
            <p className="text-sm dark:text-neutral-500 mr-2 ">
                Don&apos;t have an account?
            </p>
            <button
                className="dark:text-secondary text-[#3dce5a] font-thin rounded-xl text-sm"
                onClick={() => router.push('/signup')}
            >
                Sign up here.
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn