import React from 'react'

function SponsorLogo(props) {
  return (
    <div className={" flex flex-col justify-center items-center bg-white/90 backdrop-blur-md rounded-xl"}>
      <img src={props.path} alt={props.altText} className={props.class + " max-h-20 sm:max-h-fit lg:max-h-24 my-auto max-w-[150px] sm:max-w-[200px] lg:max-w-[300px] p-4"} />
    </div>
  )
}

export default SponsorLogo