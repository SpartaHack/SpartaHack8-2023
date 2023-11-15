'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { YouLearnLogoProps } from '../../types'
import { useGetProStatus } from '@/hooks/use-get-pro-status'
import { Icon } from '@iconify/react/dist/iconify.js'

const YouLearnLogo = ({height, width}: YouLearnLogoProps) => {
  const { loading, isPro } = useGetProStatus();
  return (
    <div className='flex flex-row justify-between'>
        <Link href="/" className="hidden dark:hidden sm:block sm:mr-3">
          <Image
            src="youlearn.svg"
            alt="YouLearn"
            width={width ? width : 120}
            height={height ? height : 120}
          />
        </Link>
        <Link href="/" className="dark:sm:block hidden sm:mr-3">
          <Image
            src="youlearnDark.svg"
            alt="YouLearn"
            width={width ? width : 120}
            height={height ? height : 120}
          />
        </Link>
        <Link href="/" className="sm:hidden">
          <Image
            src="youlearnMedia.svg"
            alt="YouLearnMedia"
            width={width ? width : 45}
            height={height ? height : 45}
          />
        </Link>
        <div>
          {isPro && 
            <Icon icon='humbleicons:crown' className='h-6 w-6 mt-3.5'/>
          }
        </div>
    </div>
  )
}

export default YouLearnLogo