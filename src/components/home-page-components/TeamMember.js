import React from 'react'

function TeamMember(props) {
  return (
    <div className={props.className + ' min-[550px]:col-span-6 col-span-12 relative w-full h-min sm:h-96 flex flex-row justify-center items-end gap-x-4 border-b-2 border-sh-pink'}>
      <div className=' w-full h-min sm:h-full sm:min-h-[300px] min-h-[200px] flex flex-row justify-center items-end pt-20 bg-white/[0.05] backdrop-blur-sm'>
        <img className='max-h-[200px] sm:max-h-[300px] h-fit' src={props.photoPath} alt={props.name + "'s Photo"} />
      </div>
      {/* <div className='absolute h-full w-full top-0 '></div> */}
      <div className='absolute top-0 group h-full w-full flex flex-col justify-between items-start px-4 pt-3  bg-black/0 hover:bg-black/40 backdrop-blur-0 hover:backdrop-blur-md transition-all duration-150 ease-in-out '>
        <div className='h-full w-full flex flex-col justify-start items-start'>
          <div className='flex flex-col items-start'>
            <div className='uppercase text-xl rubik-font font-medium text-sh-pink'>{props.name}</div>
            <div className='rubik-font text-base font-light text-sh-white/60'>{props.position}</div>
          </div>
          <div className='mt-4 min-[450px]:text-base text-sm leading-[1.5] sm:leading-normal text-sh-white/0 group-hover:text-sh-white/90 inter-font font-light transition-all duration-150 ease-in-out'>{props.about}</div>
        </div>
        <div className='flex flex-row justify-start items-center gap-x-4 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out'>
          {props.website &&
            <a
              href={props.website} target="_blank" rel="noopener noreferrer"
              className='text-sh-white/30'>
              <div className='h-5 w-5 text-sh-white/90'>
                <svg width="fit" height="fit" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.5 145C113.884 145 145 113.884 145 75.5C145 37.1162 113.884 6 75.5 6C37.1162 6 6 37.1162 6 75.5C6 113.884 37.1162 145 75.5 145Z" stroke="currentColor" stroke-width="11.72" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6 75.5H145" stroke="currentColor" stroke-width="11.72" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M75.5002 6C92.8841 25.0316 102.763 49.7296 103.3 75.5C102.763 101.27 92.8841 125.968 75.5002 145C58.1163 125.968 48.2371 101.27 47.7002 75.5C48.2371 49.7296 58.1163 25.0316 75.5002 6Z" stroke="currentColor" stroke-width="11.72" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </a>
          }
          {props.github &&
            <a
              href={props.github} target="_blank" rel="noopener noreferrer"
              className='text-sh-white/30'>
              <div className='h-5 w-5 text-sh-white/90'>
                <svg width="fit" height="fit" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M57.8125 123.404C25.8036 133.006 25.8036 107.399 13 104.198M102.625 142.609V117.834C102.865 114.782 102.453 111.713 101.415 108.832C100.378 105.951 98.7387 103.324 96.6074 101.126C116.709 98.8849 137.835 91.2668 137.835 56.313C137.833 47.375 134.395 38.7798 128.232 32.3063C131.151 24.4865 130.944 15.8431 127.656 8.17152C127.656 8.17152 120.102 5.9309 102.625 17.6462C87.9522 13.6695 72.4854 13.6695 57.8125 17.6462C40.3356 5.9309 32.7815 8.17152 32.7815 8.17152C29.4934 15.8431 29.2871 24.4865 32.2054 32.3063C25.9964 38.8278 22.5548 47.5007 22.6027 56.505C22.6027 91.2027 43.7286 98.8209 63.8302 101.318C61.724 103.494 60.0997 106.09 59.0629 108.935C58.0261 111.781 57.6 114.813 57.8125 117.834V142.609" stroke="currentColor" stroke-width="12.8036" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </a >
          }
          {props.linkedin &&
            <a
              href={props.linkedin} target="_blank" rel="noopener noreferrer"
              className='text-sh-white/30'>
              <div className='h-5 w-5 text-sh-white/90'>
                <svg width="fit" height="fit" viewBox="0 0 158 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108.163 49.7842C119.775 49.7842 130.912 54.3971 139.123 62.6083C147.334 70.8194 151.947 81.9561 151.947 93.5683V144.65H122.758V93.5683C122.758 89.6976 121.22 85.9854 118.483 83.2483C115.746 80.5113 112.034 78.9736 108.163 78.9736C104.292 78.9736 100.58 80.5113 97.8431 83.2483C95.106 85.9854 93.5684 89.6976 93.5684 93.5683V144.65H64.3789V93.5683C64.3789 81.9561 68.9919 70.8194 77.203 62.6083C85.4141 54.3971 96.5508 49.7842 108.163 49.7842V49.7842Z" stroke="currentColor" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.1894 57.0815H6V144.65H35.1894V57.0815Z" stroke="currentColor" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.5947 35.1894C28.6552 35.1894 35.1894 28.6552 35.1894 20.5947C35.1894 12.5343 28.6552 6 20.5947 6C12.5343 6 6 12.5343 6 20.5947C6 28.6552 12.5343 35.1894 20.5947 35.1894Z" stroke="currentColor" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default TeamMember