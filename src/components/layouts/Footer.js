import React from 'react'
import LinkIcon from '../icons/LinkIcon'

function Footer() {
  return (
    <div>
      <footer className='w-full h-32'>
        <div className='h-full mx-4 md:mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-row justify-between items-center'>
        <div className='text-sh-white/30'><span>
          Contact us at <span className='select-all cursor-pointer text-sky-500/50'>hello@spartahack.com</span>
        </span>
        </div>
        <div>
        <span className='whitespace-pre-wrap'><a
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"
      className='text-sh-white/30'>MLH Code of Conduct</a >
        </span>
        </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer