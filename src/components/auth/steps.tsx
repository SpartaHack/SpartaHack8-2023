import React, { useState } from 'react'
import SignUpForm from './signup-form'
import { CustomButton } from '@/helpers/custom-btn'
import CustomTextInput from '@/helpers/custom-text-input'
import { toast } from 'sonner'
import CustomAutocomplete from '@/helpers/custom-autocomplete'
import { educationOptions } from '../../../utils/constants'
import { authGoogle } from '../../../utils'

const Steps = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const handleContinue = () => {
    if (name !== '' && educationLevel !== '') {
      setStep(2)
    } else {
      toast.error("Try again. Something went wrong")
    }
  }

  return (
    <>
      <h1 className="text-3xl text-left font-black">Sign up</h1>
      {step === 1 ? (
        <>
          <p className="pb-5 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Let&apos;s get started with some questions!
          </p>
          <div className='h-full'>
            <CustomTextInput 
              value = { name }
              type = 'name'
              label = 'Name'
              isInvalid = { name === '' }
              styling = 'mb-4 mt-8 bg-transparent'
              eventChange = { (e) => setName(e.target.value) }
            />
            <CustomAutocomplete 
              size='lg'
              datas={educationOptions}
              isInvalid={ educationLevel === '' } 
              label='Select education Level' 
              onValueChange={setEducationLevel}
            />
            <CustomButton 
              title = 'Continue'
              btnType = 'button'
              btnStyling = 'mt-12 mt-8 bg-secondary py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full'
              clickEvent={handleContinue}
            />
          </div>
        </>
      ) : (
        <>
          <p className="pb-5 text-md text-left font-thin text-neutral-500 dark:text-neutral-500">
            Create your free YouLearn account
          </p>
          <CustomButton 
            title='Sign in with Google' 
            btnType='button'
            btnStyling='border-2 bg-transparent dark:border-neutral-600 dark:text-white border-neutral-300 py-6 text-black font-bold flex items-center justify-center rounded-xl h-[50.5px] w-full'
            clickEvent={authGoogle}
          />
          <div className="flex items-center justify-center pt-8">
            <div className="border-t border-neutral-500 flex-grow dark:text-neutral-500"/>
            <span className="flex-row mx-2 text-neutral-500 dark:text-neutral-500 font-light text-sm">
              or continue with
            </span>
            <div className="border-t dark:text-neutral-500 border-neutral-500 flex-grow"/>
          </div>
          <SignUpForm/>
        </>
      )}  
    </>
  )
}

export default Steps