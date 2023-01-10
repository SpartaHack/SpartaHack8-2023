import React from 'react'
import SponsorLogo from './SponsorLogo'

function SponsorsLogos(props) {

  return (
    <div className='flex flex-row flex-wrap justify-center items-stretch gap-4 md:gap-x-6 md:gap-y-2 '>
      {props.logos.map((logo) => {
        return (
          <SponsorLogo path={logo.path} altText={logo.name} class={(logo.class) ? logo.class : ""} />
        )
      })}
    </div>
  )
}

export default SponsorsLogos