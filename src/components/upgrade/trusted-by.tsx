import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

const logos = [
    {src: '/universities/stanford.svg', alt: 'stanford'},
    {src: '/universities/msu.svg', alt: 'msu'},
    {src: '/universities/mit.svg', alt: 'mit'},
    {src: '/universities/harvard.svg', alt: 'harvard'},
    {src: '/universities/uofm.svg', alt: 'uofm'},
    {src: '/universities/princeton.svg', alt: 'princeton'},
];

const TrustedBy = () => {
    return (
        <div className="container mx-auto text-center my-8">
          <h2 className="text-xs font-sans mb-8 text-neutral-500 dark:text-neutral-400">
            TRUSTED BY 10,000+ TOP STUDENTS AT
          </h2>
          <div className="flex overflow-hidden justify-center">
            <div className="flex">
              {logos.map((logo, index) => (
                <div key={index} className="flex-none mx-4">
                  <Image src={logo.src} alt={logo.alt} width={40} height={40} />
                </div>
              ))}   
            </div>
          </div>
        </div>
    );
}
  
export default TrustedBy;