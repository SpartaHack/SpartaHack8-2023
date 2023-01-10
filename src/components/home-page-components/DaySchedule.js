import React from 'react'

function DaySchedule(props) {
  return (
    <div className='col-span-1 flex flex-col w-full text-sh-white/80'>
      <div className='mb text-center rubik-font font-medium text-sh-pink text-2xl uppercase'>
        {props.title}
      </div>
      <div className='mb-6 text-center font-light text-sh-white/70'>
        {props.dayInfo}
      </div>
      <div className='flex flex-col w-full h-[400px] overflow-scroll border-t border-sh-pink/40'>
        {props.data.map((slot) => {
          return (
            <div className='flex flex-col items-start w-full py-4 gap-x-2 border-t first:border-transparent border-sh-white/20 border-'>
              <div className='inter-font text-sh-white/60 text-sm'>
                {slot.time}
              </div>
              <div className='flex flex-row flex-wrap divide-x divide-sh-white/50 rubik-font text-xl tracking-wide mt-1'>
                {slot.eventsName}
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default DaySchedule