import SignUp from '@/components/auth/signup'
import AuthHeader from '@/ui/header/auth-header'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <AuthHeader/>
      <SignUp/>
    </div>
  )
}

export default SignUpPage