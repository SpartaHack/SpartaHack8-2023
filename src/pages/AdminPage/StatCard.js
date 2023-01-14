import React from 'react'

function StatCard(props) {
  return (
    <div className={"h-32 lg:h-40 w-full lg:max-w-[196px] border border-sh-pink rounded-xl text-sh-white rubik-font " + props.className}>
      <div className="h-full flex flex-col justify-between items-start p-5 sm:p-6">
        <div className="uppercase text-xs sm:text-sm tracking-wide opacity-70">
          {props.statTitle}
        </div>
        <div className="text-4xl sm:text-[50px] font-bold sm:-mb-4f">
          {props.data}
        </div>
      </div>
    </div>
  )
}

export default StatCard