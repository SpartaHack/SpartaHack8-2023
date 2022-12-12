import React from 'react'
import SectionHeading from './SectionHeading'
import SponsorsLogos from './SponsorsLogos'
import techsmithLogo from '../../materials/logos/techsmith-logo.png'
import afLogo from '../../materials/logos/af-logo.png'
import atiLogo from '../../materials/logos/ati-logo.png'
import autoownersLogo from '../../materials/logos/autoowners-logo.png'
import bluemedLogo from '../../materials/logos/bluemed-logo.png'
import boschLogo from '../../materials/logos/bosch-logo.png'
// import cseLogo from '../../materials/logos/cse-logo.eps'
import dowLogo from '../../materials/logos/dow-logo.png'
import dynLogo from '../../materials/logos/dyn-logo.png'
import hackinghealthLogo from '../../materials/logos/hackinghealth-logo.png'
import icsLogo from '../../materials/logos/ics-logo.png'
import msufcuLogo from '../../materials/logos/msufcu-logo.png'
import msuitLogo from '../../materials/logos/msuit-logo.png'
// import siLogo from '../../materials/logos/si-logo.ai'
// import tcsLogo from '../../materials/logos/tcs-logo.png'
import ueimsuLogo from '../../materials/logos/ueimsu-logo.png'
import zfLogo from '../../materials/logos/zf-logo.png'

function SponsorsSection() {

  const logos = [
    {
      name: "TechSmith Logo",
      path: techsmithLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: afLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: atiLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: autoownersLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: bluemedLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: boschLogo,
      class: ""
    },
    // {
    //   name: "TechSmith Logo",
    //   path: cseLogo,
    // class: ""
    // },
    {
      name: "TechSmith Logo",
      path: dowLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: dynLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: hackinghealthLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: icsLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: msufcuLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: msuitLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: ueimsuLogo,
      class: ""
    },
    {
      name: "TechSmith Logo",
      path: zfLogo,
      class: ""
    },
  ]

  return (
    <div className='w-full mt-24 flex flex-col items-center'>
      <SectionHeading text="Past Sponsors" />
      <SponsorsLogos logos={logos} />
      <div className='mx-3 sm:mx-auto max-w-lg md:max-w-3xl inter-font font-light text-sh-white text-center leading-8 mt-8 md:mt-4'>
        <span className='block text-[16px] md:text-[20px] opacity-70'>
          Take part in the 24-hour annual hackathon held at Michigan State University
          tailored for those who see opportunity in a challenge and <span className='hidden lg:inline'><br /></span> seek to
          widen their horizons.
        </span>
      </div>
    </div>
  )
}

export default SponsorsSection