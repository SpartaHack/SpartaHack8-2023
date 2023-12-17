import Image from 'next/image'
import React from 'react' 
import { SpaceIconProps } from '../../types'

const SpaceIcon = ({clickEvent, height, width}: SpaceIconProps) => {
  return (
    <>
        <Image
            src="/spaceIcon.png"
            alt="spaceIcon"
            height={height ? height : 55}
            width={width ? width : 55}
            className="dark:hidden block rounded-full text-[55px] dark:bg-neutral-900 bg-white text-absolute_black dark:text-secondary hover:scale-110 backdrop duration-100 cursor-pointer"
            onClick={clickEvent}
        />
        <Image
            src="/spaceIconDark.png"
            alt="spaceIconDark"
            height={height ? height : 55}
            width={width ? width : 55}
            className="dark:block hidden rounded-full text-[55px] dark:bg-neutral-900 bg-white text-absolute_black dark:text-secondary hover:scale-110 backdrop duration-100 cursor-pointer"
            onClick={clickEvent}
        />
    </>
  )
}

export default SpaceIcon