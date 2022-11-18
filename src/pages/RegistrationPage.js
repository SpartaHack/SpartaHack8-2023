import React from 'react';
import { FormProvider } from '../context/FormContext';
import RegistrationForm from './RegistrationSteps/RegistrationForm';


function RegistrationPage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-sh-black'>
      <FormProvider>
        <RegistrationForm />
      </FormProvider>
    </div>
  )
}

export default RegistrationPage;