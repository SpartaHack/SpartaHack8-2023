import React, { useEffect, useState } from 'react';
import Background from '../components/layouts/Background';
import { FormProvider } from '../context/FormContext';
import RegistrationForm from './RegistrationSteps/RegistrationForm';


function RegistrationPage() {
  return (
    <div className='relative h-full'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background />
      </div>
      <div className='flex flex-col justify-center items-center overflow-x-hidden min-h-screen flex flex-col justify-center items-center'>
        <FormProvider>
          <RegistrationForm />
        </FormProvider>
      </div>
    </div>
  )
}

export default RegistrationPage;