import React from 'react'

function SectionHeading(props) {
  return (
    <span
      className="block mb-6 text-[45px] sm:text-[70px] lg:text-[76px] rubik-font font-medium text-sh-white">
      {props.text}
    </span>
  )
}

export default SectionHeading