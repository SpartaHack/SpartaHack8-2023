import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const YouLearnLogo = () => {
  return (
    <div>
        <Link href="https://www.youlearn.ai" className="hidden dark:hidden sm:block sm:mr-3">
          <Image
            src="youlearn.svg"
            alt="YouLearn"
            width={120}
            height={120}
            className='ml-10'
          />
        </Link>
        <Link href="https://www.youlearn.ai" className="dark:sm:block hidden sm:mr-3">
          <Image
            src="youlearnDark.svg"
            alt="YouLearn"
            width={120}
            height={120}
            className='ml-10'
          />
        </Link>
        <Link href="https://www.youlearn.ai" className="sm:hidden">
          <Image
            src="youlearnMedia.svg"
            alt="YouLearnMedia"
            width={45}
            height={45}
            className='ml-5'
          />
        </Link>
    </div>
  )
}

export default YouLearnLogo