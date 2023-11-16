import React from 'react'
import { PDFProps } from '../../../../types';

const PDF = ({ sourcePage }: PDFProps) => {
  const pdfUrl = `https://storage.googleapis.com/youlearn-content-uploads/example.pdf#page=${sourcePage}`;

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
        <div className="h-[75vh] lg:h-screen">
        <iframe
            key={pdfUrl}
            src={pdfUrl}
            width="100%"
            height="100%"
            className='rounded-xl border-none'
        />
        </div>
    </div>
  )
}

export default PDF