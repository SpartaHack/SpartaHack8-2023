import SignIn from '@/components/auth/signin'
import AuthHeader from '@/ui/header/auth-header'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
        <AuthHeader/>
        <SignIn/>
    </div>
  )
}

export default SignInPage