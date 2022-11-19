import React from 'react'
import BasicInfoCard from './BasicInfoCard'

function BasicInfoCards() {

  const cardIcons = [
    <div>
      <div className="h-8">
        <svg width="38" height="34" viewBox="0 0 38 34" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M31.3265 19.0435H36.9054" stroke="#F5F5F5" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27.7288 10.3603L31.6738 6.41705" stroke="#F5F5F5" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.0429 6.76346V1.1864" stroke="#F5F5F5" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.3571 10.3603L6.41199 6.41705" stroke="#F5F5F5" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.75929 19.0435H1.18042" stroke="#F5F5F5" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M10.3571 27.7266L6.41559 31.6699C3.1841 28.4384 1.18585 23.9746 1.18585 19.0435C1.18585 9.18121 9.18067 1.1864 19.0429 1.1864C28.9052 1.1864 36.9 9.18121 36.9 19.0435C36.9 23.9737 34.9017 28.4375 31.6712 31.669L27.7288 27.7266"
            stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M19.0429 32.738L21.4174 30.3699L19.0429 17.1472L16.6685 30.3699L19.0429 32.738Z"
            stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
      </div>
    </div>,
    <div>
      <div className="h-8">
        <svg width="29" height="34" viewBox="0 0 29 34" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.6818 14.0915C27.6818 24.2733 14.5909 33.0006 14.5909 33.0006C14.5909 33.0006 1.5 24.2733 1.5 14.0915C1.5 10.6195 2.87922 7.28981 5.33424 4.83479C7.78926 2.37977 11.119 1.00055 14.5909 1.00055C18.0628 1.00055 21.3926 2.37977 23.8476 4.83479C26.3026 7.28981 27.6818 10.6195 27.6818 14.0915Z"
            stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M14.5909 18.4551C17.0009 18.4551 18.9545 16.5015 18.9545 14.0915C18.9545 11.6815 17.0009 9.72784 14.5909 9.72784C12.1809 9.72784 10.2273 11.6815 10.2273 14.0915C10.2273 16.5015 12.1809 18.4551 14.5909 18.4551Z"
            stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>,
    <div>
      <div className="h-8">
        <svg width="31" height="34" viewBox="0 0 31 34" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.6 4.20056H4.2C2.43269 4.20056 1 5.63325 1 7.40056V29.8006C1 31.5679 2.43269 33.0006 4.2 33.0006H26.6C28.3673 33.0006 29.8 31.5679 29.8 29.8006V7.40056C29.8 5.63325 28.3673 4.20056 26.6 4.20056Z"
            stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.8 1.00055V7.40055" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M9 1.00055V7.40055" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M1 13.8005H29.8" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </div>
    </div>

  ]

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12'>
      <BasicInfoCard cardIcon={cardIcons[0]} cardHeading="All Skill Levels" cardText="Beginner - Advanced" />
      <BasicInfoCard cardIcon={cardIcons[1]} cardHeading="Michigan State University" cardText="East Lansing, Michigan" />
      <BasicInfoCard cardIcon={cardIcons[2]} cardHeading="Jan 28-29, 2023" cardText="2 Days / 1 Night" />
    </div>
  )
}

export default BasicInfoCards