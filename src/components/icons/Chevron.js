import React from 'react'

function Chevron(props) {
  return (
    <svg className={props.className} width={props.width} height={props.height} viewBox={`0 0 68 38`} fill="none"
      xmlns = "http://www.w3.org/2000/svg" >
<path d="M4.9043 5.63068L33.2353 33.9617L61.5663 5.63068" stroke={(props.strokeColor) ? props.strokeColor : "black"} strokeWidth={(props.strokeWidth) ? props.strokeWidth : "6"} strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

export default Chevron


