import React, { useEffect, useState } from 'react';
import Background from '../components/layouts/Background';
import { FormProvider } from '../context/FormContext';
import RegistrationForm from './RegistrationSteps/RegistrationForm';


function RegistrationPage() {

  const [heightData, setHeightData] = useState([0, 0, 0])

  useEffect(() => {
    // var section1Height = document.getElementById("section1").offsetHeight
    // var section2Height = document.getElementById("section2").offsetHeight
    var pageHeight = document.querySelector("html").offsetHeight
    var navHeight = document.querySelector("nav").offsetHeight
    var pageWidth = document.querySelector("html").clientWidth
    setHeightData([pageHeight, navHeight, pageWidth])
  }, [])

  console.log(heightData)

  return (
    <div className='relative h-full'>
      <div className="absolute top-0 w-full h-full -z-10">
        <Background pageHeight={heightData[0]} navHeight={heightData[1]} />
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