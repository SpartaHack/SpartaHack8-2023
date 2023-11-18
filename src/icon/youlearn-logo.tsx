'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { YouLearnLogoProps } from '../../types'

const YouLearnLogo = ({height, width}: YouLearnLogoProps) => {
  return (
    <div className='flex flex-row justify-between'>
        <Link href="/" className="hidden dark:hidden sm:block sm:mr-3">
          <Image
            src="youlearn.svg"
            alt="YouLearn"
            width={width ? width : 110}
            height={height ? height : 110}
          />
        </Link>
        <Link href="/" className="dark:sm:block hidden sm:mr-3">
          <Image
            src="youlearnDark.svg"
            alt="YouLearn"
            width={width ? width : 110}
            height={height ? height : 110}
          />
        </Link>
        <Link href="/" className="sm:hidden">
          <Image
            src="youlearnMedia.svg"
            alt="YouLearnMedia"
            width={width ? width : 110}
            height={height ? height : 110}
          />
        </Link>
    </div>
  )
}

export default YouLearnLogo