'use client'
import { CustomButton } from '@/helpers/custom-btn'
import CustomTextInput from '@/helpers/custom-text-input'
import React, { ChangeEvent, useState } from 'react'

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
      setState(event.target.value);
    };
  
    const isInvalid = (value: string, type?: string) => {
        if (type === 'email') {
          return !emailRegex.test(value);
        } else if (type === 'confirmPassword') {
          return value !== password || value == '';
        }
        return value === '';
      }
    
      const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!isInvalid(email, 'email') && !isInvalid(password) && !isInvalid(confirmPassword, 'confirmPassword')) {
            console.log('Form submitted');
        } else {
            console.log('Form not valid');
        }
    }

  return (
    <div className='mt-8'>
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
            isInvalid = { isInvalid(password) }
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
            title = 'Create Account'
            btnType = 'submit'
            btnStyling = 'mt-12 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-[10px] h-[50.5px] w-full'
            clickEvent={handleSubmit}
        />
        <div className="h-full mt-5 flex items-center justify-start font-black">
            <p className="text-sm dark:text-neutral-500 mr-2 ">
                Already have an account?
            </p>
            <button
                className="text-[#3dce5a] dark:text-[#5ce778] font-thin rounded-[10px] text-sm"
            >
                Login here.
            </button>
        </div>
    </div>
  )
}

export default SignUpForm