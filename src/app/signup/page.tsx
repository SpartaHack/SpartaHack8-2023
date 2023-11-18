import SignUp from '@/components/auth/signup'
import SecondaryHeader from '@/ui/header/secondary-header'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <SecondaryHeader/>
      <SignUp/>
    </div>
  )
}

export default SignUpPage