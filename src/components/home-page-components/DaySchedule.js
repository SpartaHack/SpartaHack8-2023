import React from 'react'

function DaySchedule(props) {
  return (
    <div className='col-span-1 flex flex-col w-full text-sh-white/80'>
      <div className='mb-4 text-center rubik-font font-medium text-sh-pink text-2xl uppercase'>
        {props.title}
      </div>
      <div className='flex flex-row justify-center items-center w-full h-12 border-b border-sh-white/50 rubik-font text-lg'>
        <div className='w-32 text-center'>Time</div>
        <div className='mx-auto'>Event(s)</div>
      </div>
      <div className='flex flex-col w-full divide-y divide-white/10 h-[400px] overflow-scroll'>
        {props.data.map((slot) => {
          return (
            <div className='flex flex-row w-full py-3 gap-x-2'>
              <div className='w-32 flex-none flex flex-col justify-center items-center border-r border-sh-pink/30 font-mono'>
                {slot.time}
              </div>
              <div className='grow flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-sh-white/10'>
                {slot.events.map((event) => {
                  return (
                    <div className={slot.class + ' grow p-2 text-center '}>
                      {event}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default DaySchedule