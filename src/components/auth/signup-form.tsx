import { CustomButton } from '@/helpers/custom-btn'
import CustomTextInput from '@/helpers/custom-text-input'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSignUpEmailContinue } from '@/functions/auth';

const SignUpForm = () => {
    const { signUpEmailContinue, signUpStatus } = useSignUpEmailContinue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter()
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
      setState(event.target.value);
    };
  
    const handleSignUp = async () => {
      await signUpEmailContinue(email, password);
    };
  
    useEffect(() => {
      if (signUpStatus) {
        router.push(signUpStatus);
      }
    }, [signUpStatus, router]);
  
    const isInvalid = (value: string, type?: string) => {
      if (type === 'email') {
        return !emailRegex.test(value);
      } else if (type === 'confirmPassword') {
        return value !== password || value == '';
      } else if (type === 'password') {
        return value.length < 6;
      }
      return value === '';
    }

  return (
    <div className='mt-10'>    
        <CustomTextInput 
            value = { email }
            type = 'email'
            label = 'Email'
            isInvalid = { isInvalid(email, 'email') }
            styling = 'mb-10 mt-8 bg-transparent'
            eventChange = { (e) => handleChange(e, setEmail) }
        />
        <CustomTextInput 
            value = { password }
            type = 'password'
            label = 'Password'
            isInvalid = { isInvalid(password, 'password') }
            styling = 'mb-10 bg-transparent'
            eventChange = { (e) => handleChange(e, setPassword) }
        />
        <CustomTextInput 
            value = { confirmPassword }
            type = 'password'
            label = 'Confirm Password'
            isInvalid = { isInvalid(confirmPassword, 'confirmPassword') }
            styling = 'mb-6 bg-transparent'
            eventChange = { (e) => handleChange(e, setConfirmPassword) }
        />
        <CustomButton 
          title = 'Create an account'
          btnType = 'button'
          btnStyling = 'mt-12 mt-8 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full'
          clickEvent={handleSignUp}
        />
    </div>
  )
}

export default SignUpForm