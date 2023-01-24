import React from 'react'

function DaySchedule(props) {
  return (
    <div className='col-span-1 flex flex-col w-full text-sh-white/80 overflow-x-hidden '>
      <div className='mb text-center rubik-font font-medium text-sh-pink text-2xl uppercase'>
        {props.title}
      </div>
      <div className='mb-6 text-center font-light text-sh-white/70'>
        {props.dayInfo}
      </div>
      <div className='flex flex-col w-full h-[450px] overflow-scroll border-t border-sh-pink/40'>
        {props.data.map((slot) => {
          return (
            <div className='flex flex-col items-start w-full py-4 gap-x-2 border-b border-sh-white/20 border-'>
              <div className='inter-font text-sh-white/60 text-sm tracking-wide'>
                {slot.time}
              </div>
              <div className='flex flex-col gap-y-3 mt-3'>
                {slot.events
                  .map((event) => {
                    return (
                      <div className='flex flex-col whitespace-pre-wrap break-words'>
                        <span className='rubik-font text-xl tracking-wide'>
                        {event.name}
                        </span>
                        {event.location && 
                        <span className='inter-font text-xs text-sh-pink/90'>{event.location}</span>
                        }
                    </div>
                  )
                  })
                }
                
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default DaySchedule