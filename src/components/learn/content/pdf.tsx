import React from 'react'

const PDF = () => {
  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
        <div className="h-[75vh] lg:h-screen">
        <iframe
            src="https://storage.googleapis.com/youlearn-content-uploads/example.pdf"
            width="100%"
            height="100%"
            className='rounded-[10px] border-none'
        />
        </div>
    </div>
  )
}

export default PDF