import React from 'react'
import SectionHeading from './SectionHeading'
import SponsorsLogos from './SponsorsLogos'

import techsmithLogo from '../../materials/logos/white-logos/techsmith-white.png'
import autoownersLogo from '../../materials/logos/white-logos/autoowners-white.png'
import msufcuLogo from '../../materials/logos/white-logos/msufcu-white.png'
import msuitLogo from '../../materials/logos/white-logos/msuit-white.png'
import techacksLogo from '../../materials/logos/white-logos/techacks-white.png'
import burgessLogo from '../../materials/logos/white-logos/burgess-white.png'
import wolframLogo from '../../materials/logos/white-logos/wolfram-white.png'
import kelloggsLogo from '../../materials/logos/white-logos/kelloggs-white.png'
import gerdauLogo from '../../materials/logos/white-logos/gerdau-white.png'
import githubLogo from '../../materials/logos/white-logos/github-white.png'
import mlhLogo from '../../materials/logos/white-logos/mlh-white.png'
import coeLogo from '../../materials/logos/white-logos/coe-white.png'

function SponsorsSection() {

  const logos = [
    {
      name: "College of Engineering Logo",
      path: coeLogo,
      class: "max-w-[200px] "
    },
        {
      name: "MSU FCU Logo",
      path: msufcuLogo,
      class: "sm:max-h-24 "
    },
        {
      name: "MLH Logo",
      path: mlhLogo,
      class: "max-h-[50px] sm:max-h-24 "
    },
        {
      name: "Auto-Owners Logo",
      path: autoownersLogo,
      class: ""
    },
        {
      name: "Gerdau Logo",
      path: gerdauLogo,
      class: "sm:max-h-24"
    },
    {
      name: "TechSmith Logo",
      path: techsmithLogo,
      class: ""
    },
        {
      name: "Wolfram Logo",
      path: wolframLogo,
      class: ""
    },
        {
      name: "GitHub Logo",
      path: githubLogo,
      class: "sm:max-h-32 lg:max-h-32 -my-4"
    },
        {
      name: "Kellogg's Logo",
      path: kelloggsLogo,
      class: "max-w-[130px] sm:max-h-28"
    },
        {
      name: "MSU IT Logo",
      path: msuitLogo,
      class: "max-h-[80px] sm:max-h-32 lg:max-h-28 "
    },
    {
      name: "Burgess Institute Logo",
      path: burgessLogo,
      class: "max-h-20 lg:max-h-32 max-w-[200px] "
    },
    {
      name: "TecHacks Logo",
      path: techacksLogo,
      class: ""
    }
  ]

  return (
    <div className='w-full mt-24 flex flex-col items-center'>
      <SectionHeading text="Our Sponsors" />
      <SponsorsLogos logos={logos} />
      <div className='mx-3 sm:mx-auto max-w-lg md:max-w-3xl inter-font font-light text-sh-white text-center leading-8 mt-16 md:mt-12'>
        <span className='block text-[16px] opacity-70'>
          Our sponsors allow us to host hundreds of students every year and provide them with great learning opportunities and fun experiences.
          If you would like to help us do the same this year, contact us at <span className='select-all cursor-pointer text-sky-500'>sponsor@spartahack.com</span>, today!
          <span className='hidden lg:inline'><br /></span>
        </span>
      </div>
    </div>
  )
}

export default SponsorsSection