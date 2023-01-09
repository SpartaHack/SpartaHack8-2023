import React from 'react'
import SectionHeading from './SectionHeading'
import SponsorsLogos from './SponsorsLogos'

import googleCloudLogo from '../../materials/logos/white-logos/google-cloud-logo-white.png'
import mongoLogo from '../../materials/logos/white-logos/mongo-logo-white.png'
import domainLogo from '../../materials/logos/white-logos/domain-logo-white.png'
import twilioLogo from '../../materials/logos/white-logos/twilio-logo-white.png'
import wixLogo from '../../materials/logos/white-logos/wix-logo-white.png'
import digiKeyLogo from '../../materials/logos/white-logos/digikey-logo-white.png'
import digiOceanLogo from '../../materials/logos/white-logos/digiocean-logo-white.png'


function PartnersSection() {

  const logos = [
    {
      name: "Google Cloud Logo",
      path: googleCloudLogo,
      class: "max-w-[160px] sm:max-w-[270px] lg:max-w-[200px] "
    },
    {
      name: "MongoDB Logo",
      path: mongoLogo,
      class: "max-w-[160px] sm:max-w-[270px] lg:max-w-[200px] "
    },
    {
      name: "Domain.com Logo",
      path: domainLogo,
      class: "max-w-[160px] sm:max-w-[270px] lg:max-w-[200px] "
    },
    {
      name: "Twilio Logo",
      path: twilioLogo,
      class: "max-w-[111px] sm:max-w-[190px] lg:max-w-[200px] "
    },
    {
      name: "Wix Logo",
      path: wixLogo,
      class: "max-w-[91px] sm:max-w-[150px] lg:max-w-[200px] lg:max-h-[90px]"
    },
    {
      name: "Digi-Key Logo",
      path: digiKeyLogo,
      class: "max-w-[121px] sm:max-w-[210px] lg:max-w-[200px] lg:max-h-[90px]"
    },
    {
      name: "Digital Ocean Logo",
      path: digiOceanLogo,
      class: "max-w-[200px] sm:max-w-[270px] lg:max-w-[200px] "
    },
  ]

  return (
    <div className='w-full mt-24 flex flex-col items-center'>
      <SectionHeading text="Our Partners" />
      <SponsorsLogos logos={logos} />
      {/* <div className='mx-3 sm:mx-auto max-w-lg md:max-w-3xl inter-font font-light text-sh-white text-center leading-8 mt-16 md:mt-12'>
        <span className='block text-[16px] md:text-[20px] opacity-70'>
          Our sponsors allow us to host hundreds of students every year and provide them with great learning opportunities and fun experiences.
          If you would like to help us do the same this year, contact us at <span className='select-all cursor-pointer text-sky-500'>sponsor@spartahack.com</span>, today!
          <span className='hidden lg:inline'><br /></span>
        </span>
      </div> */}
    </div>
  )
}

export default PartnersSection