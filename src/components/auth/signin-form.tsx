import { CustomButton } from '@/helpers/custom-btn'
import CustomTextInput from '@/helpers/custom-text-input'
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
      setState(event.target.value);
    };
  
    const isInvalid = (value: string, type?: string) => {
        if (type === 'email') {
          return !emailRegex.test(value);
        }
        return value === '';
      }
    
      const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!isInvalid(email, 'email') && !isInvalid(password)) {
            toast.success('Sign in successful');
        } else {
            toast.error('Something went wrong. Try again')
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
        <CustomButton 
            title = 'Sign In'
            btnType = 'submit'
            btnStyling = 'mt-12 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-[10px] h-[50.5px] w-full'
            clickEvent={handleSubmit}
        />
    </div>
  )
}

export default SignInForm