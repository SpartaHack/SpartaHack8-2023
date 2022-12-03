import React from 'react'
import LinkIcon from '../icons/LinkIcon'

function Footer() {
  return (
    <div>
      <footer className='w-full h-32 flex flex-col justify-center items-center'>
        <span className='whitespace-pre-wrap'> 
    <a
      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer"
      className='text-sh-white/30 text-lg'>MLH Code of Conduct</a >
  </span>
      </footer>
    </div>
  )
}

export default Footer