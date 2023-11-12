import React, { useState } from 'react'
import SignUpForm from './signup-form'
import { CustomButton } from '@/helpers/custom-btn'
import { authGoogle } from '../../../utils'
import CustomTextInput from '@/helpers/custom-text-input'
import { toast } from 'sonner'
import CustomAutocomplete from '@/helpers/custom-autocomplete'
import { educationOptions } from '../../../utils/constants'

const Steps = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  };

  const isInvalid = (value: string, type?: string) => {
    if (type === 'name') {
      return name == '';
    } else if (type === 'educationLevel') {
      return educationLevel == '';
    }
    return false
  }

  const handleContinue = () => {
    if (!isInvalid( name, 'name') && !isInvalid( educationLevel, 'educationLevel')) {
      setStep(2)
    } else {
      toast.error("Try again. Something went wrong")
    }
  }

  const handleEducationLevelChange = (newValue: string) => {
    setEducationLevel(newValue);
  };

  return (
    <>
      {step === 1 ? (
        <>
          <h1 className="text-3xl text-left font-black">Sign up</h1>
          <p className="pb-5 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Let's get started with some questions!
          </p>
          <div className='h-full'>
            <CustomTextInput 
              value = { name }
              type = 'name'
              label = 'Name'
              isInvalid = { isInvalid(name, 'name') }
              styling = 'mb-4 mt-8 bg-transparent'
              eventChange = { (e) => handleChange(e, setName) }
            />
            <CustomAutocomplete 
              datas={educationOptions}
              isInvalid={ isInvalid(educationLevel, 'educationLevel') } 
              label='Select education Level' 
              onValueChange={handleEducationLevelChange}
            />
            <CustomButton 
              title = 'Continue'
              btnType = 'button'
              btnStyling = 'mt-12 mt-8 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-[10px] h-[50.5px] w-full'
              clickEvent={handleContinue}
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-left font-black">Sign up</h1>
          <p className="pb-10 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Create your free YouLearn account
          </p>
          <CustomButton
            title='Sign up with Google' 
            btnType='button'
            btnStyling='border dark:text-white border-neutral-300 py-6 text-black font-bold flex items-center justify-center rounded-[10px] h-[50.5px] w-full'
            clickEvent={authGoogle}
          />
          <div className="flex items-center justify-center pt-8">
            <div className="border-t border-neutral-500 flex-grow dark:text-neutral-500"></div>
            <span className="flex-row mx-2 text-neutral-500 dark:text-neutral-500 font-light text-sm">
              or continue with
            </span>
            <div className="border-t dark:text-neutral-500 border-neutral-500 flex-grow"></div>
          </div>
          <SignUpForm/>
        </>
      )}  
    </>
  )
}

export default Steps