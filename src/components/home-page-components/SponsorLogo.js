import React from 'react'

function SponsorLogo(props) {
  return (
    <div className={" flex flex-col justify-center items-center"}>
      <img src={props.path} alt={props.altText} className={props.class + " max-h-24 sm:max-h-fit lg:max-h-24 my-auto max-w-[150px] sm:max-w-[300px] lg:max-w-[300px] p-2 sm:p-4"} />
    </div>
  )
}

export default SponsorLogo