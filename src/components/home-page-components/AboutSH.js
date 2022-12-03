import React from 'react'

function AboutSH() {
  const aboutSHLogo = (
    <svg style={{ filter: "drop-shadow(0px 0px 6px #6B33C9)" }}
      width="294" height="336" viewBox="0 0 294 336" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M264.621 219.325C264.621 212.229 264.943 205.214 260.382 199.835C257.851 197.086 231.635 183.351 223.582 178.825C218.54 175.99 211.422 178.723 210.405 185.672C209.919 188.974 209.919 188.624 209.515 192.306C209.213 195.065 209.771 198.996 213.79 201.623C220.601 206.072 221.516 206.702 234.309 215.008C241.785 219.894 246.745 227.316 248.959 232.985C250.033 235.454 251.981 241.859 251.745 248.265C251.49 275.339 251.909 266.831 251.761 304.197C251.296 318.334 252.298 319.65 248.524 325.049C246.561 327.858 242.434 330.032 238.41 329.992C237.868 329.987 234.616 330.231 230.771 328.016C223.019 323.551 145.538 279.093 140.174 275.639C137.965 274.217 134.846 273.44 131.768 273.267L100.96 273.17C88.1362 271.809 79.142 259.348 79.142 248.915C79.142 236.652 80.3692 228.581 80.3692 180.059C80.3692 148.977 99.9019 127.865 114.996 115.293C134.641 100.42 159.916 95.9648 179.812 98.9974C181.709 99.2717 190.99 100.684 202.351 105.388C219.706 112.57 232.284 118.117 232.284 118.117C237.551 120.058 244.919 118.646 248.366 113.79C262.008 94.5629 266.543 87.1058 284.363 61.7226C290.162 53.1328 285.616 46.0009 278.314 40.3116C268.987 33.0426 262.964 29.4817 254.098 24.7982C246.607 20.8411 238.794 17.4834 230.715 14.9131C180.052 -1.22511 119.567 3.7276 77.0353 36.4968C29.1291 73.0198 36.7837 97.4634 10.2305 133.92C4.33998 142.007 6.76367 153.381 15.4102 158.46L32.6522 168.584"
        stroke="url(#paint0_linear_50_52)" stroke-width="12" stroke-linecap="round"
        stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_50_52" x1="252.947" y1="338.714" x2="9.26116"
          y2="-36.1152" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1E4FFF" />
          <stop offset="1" stop-color="#F70063" />
        </linearGradient>
      </defs>
    </svg>
  )

  const aboutText = (<span>SpartaHack 8 is Michigan State University’s official student-run invention marathon or hackathon. Taking place the weekend of January 28<span class="text-xs align-text-top">th</span>, 2023, the event will draw 500+ of the brightest student developers and designers to East Lansing, MI, for 24 hours of learning, building, and networking.</span>)

  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-12 lg:gap-20'>
        <div className='scale-75 sm:scale-100'>
          {aboutSHLogo}
        </div>
        <div className='max-w-2xl flex flex-col justify-center items-center lg:items-start gap-y-4 text-center lg:text-left'>
          <div className='rubik-font font-medium text-[39px] sm:text-[48px] lg:text-[56px] leading-[48px] md:leading-[64px] text-sh-white'>
            What's <span className='whitespace-nowrap'
              style={{
                background: "linear-gradient(91.53deg, #F70063 0%, #1E4FFF 120%)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip: "text"
            }}
            > SpartaHack 8</span>?
          </div>
          <div className='max-w-xl md:max-w-2xl inter-font font-light text-[16px] sm:text-[20px]  leading-8 text-sh-white/70'>{aboutText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSH