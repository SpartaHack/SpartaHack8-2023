import React from 'react'
import LinkIcon from '../icons/LinkIcon'

function Footer() {
  return (
    <div>
      <footer className='w-full min-h-32 bg-white/[0.02] z-5' style={{ "boxShadow": "0px -3px 25px 0px rgba(0,0,0,0.18)" }}>
        <div className='min-h-32 px-6 py-6 md:mx-auto lg:max-w-4xl xl:max-w-5xl flex flex-col sm:flex-row justify-center gap-y-2 md:gap-y-4 sm:justify-between items-center'>
          <div className='text-sh-white/30'><span>
            Contact us at <span className='select-all cursor-pointer text-sky-500/50'>hello@spartahack.com</span>
          </span>
          </div>
          <div className='flex flex-row items-center justify-center gap-x-1 opacity-30'>
            <a className='p-2'
              href="https://www.instagram.com/msuspartahack" target="_blank" rel="noopener noreferrer">
              <svg className='w-min h-5' width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M106.952 7H40.3173C21.9167 7 7 21.9167 7 40.3173V106.952C7 125.353 21.9167 140.269 40.3173 140.269H106.952C125.353 140.269 140.269 125.353 140.269 106.952V40.3173C140.269 21.9167 125.353 7 106.952 7Z" stroke="white" stroke-width="13.3269" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M100.29 69.4371C101.112 74.9827 100.165 80.6465 97.583 85.6227C95.0009 90.599 90.9154 94.6344 85.9077 97.1549C80.9 99.6754 75.225 100.553 69.6899 99.6621C64.1548 98.7714 59.0415 96.1581 55.0773 92.1939C51.113 88.2296 48.4997 83.1163 47.6091 77.5813C46.7184 72.0462 47.5957 66.3712 50.1162 61.3635C52.6368 56.3557 56.6722 52.2703 61.6484 49.6882C66.6247 47.1061 72.2884 46.1589 77.8341 46.9812C83.4908 47.82 88.7278 50.456 92.7715 54.4996C96.8152 58.5433 99.4511 63.7803 100.29 69.4371Z" stroke="white" stroke-width="13.3269" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M110.284 36.9856H110.35" stroke="white" stroke-width="13.3269" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a className='p-2'
              href="https://www.linkedin.com/company/spartahack/" target="_blank" rel="noopener noreferrer">
              <svg className='w-min h-5' width="152" height="145" viewBox="0 0 152 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104.185 48.0796C115.346 48.0796 126.049 52.513 133.94 60.4044C141.832 68.2958 146.265 78.9989 146.265 90.1591V139.252H118.212V90.1591C118.212 86.439 116.734 82.8713 114.104 80.2409C111.473 77.6104 107.906 76.1326 104.185 76.1326C100.465 76.1326 96.8977 77.6104 94.2672 80.2409C91.6368 82.8713 90.159 86.439 90.159 90.1591V139.252H62.106V90.1591C62.106 78.9989 66.5393 68.2958 74.4308 60.4044C82.3222 52.513 93.0253 48.0796 104.185 48.0796V48.0796Z" stroke="white" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34.053 55.0928H6V139.252H34.053V55.0928Z" stroke="white" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.0265 34.053C27.7731 34.053 34.053 27.7731 34.053 20.0265C34.053 12.2799 27.7731 6 20.0265 6C12.2799 6 6 12.2799 6 20.0265C6 27.7731 12.2799 34.053 20.0265 34.053Z" stroke="white" stroke-width="11.03" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div>
            <span className='whitespace-pre-wrap'>
              <a
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"
                className='text-sh-white/30'>MLH Code of Conduct <LinkIcon width="14" height="14" strokeColor="#575757" className="inline align-middle ml-1 mb-0.5" />
              </a >
            </span>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Footer