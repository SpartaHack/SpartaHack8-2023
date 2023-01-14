import React from 'react'

function PersonModalItem(props) {
  console.log(props.data)
  return (
    <div className={props.className + " col-span-1 flex flex-col justify-start align-center min-h-[82px] lg:min-h-[72px] "}>
      <div className="rubik-font uppercase text-xs text-white/80 pb-1 border-b border-white/30 ">
        {props.dataTitle}
      </div>
      <div className="mt-2 mb-6 lg:mb-5 text-base inter-font">
        {props.data}
      </div>
    </div>
  )
}

export default PersonModalItem