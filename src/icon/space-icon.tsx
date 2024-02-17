import Image from "next/image";
import React from "react";
import { SpaceIconProps } from "../../types";
import { Icon } from "@iconify/react/dist/iconify.js";

const SpaceIcon = ({ clickEvent, height, width, isOpen }: SpaceIconProps) => {
  return (
    <>
      {!isOpen ? (
        <>
          <Image
            unoptimized
            src="/spaceIcon.png"
            priority
            alt="spaceIcon"
            height={height ? height : 55}
            width={width ? width : 55}
            className="dark:hidden block rounded-full text-[55px] dark:bg-neutral-900 bg-white text-absolute_black dark:text-secondary hover:scale-110 backdrop duration-100 cursor-pointer"
            onClick={clickEvent}
          />
          <Image
            unoptimized
            priority
            src="/spaceIconDark.png"
            alt="spaceIconDark"
            height={height ? height : 55}
            width={width ? width : 55}
            className="dark:block hidden rounded-full text-[55px] dark:bg-neutral-900 bg-white text-absolute_black dark:text-secondary hover:scale-110 backdrop duration-100 cursor-pointer"
            onClick={clickEvent}
          />
        </>
      ) : (
        <Icon
          icon="gg:close"
          className="rounded-full text-[55px] p-2 dark:bg-absolute_black bg-absolute_white dark:text-absolute_white dark:border-absolute_white text-black border-black border-[2.5px] hover:scale-110 backdrop duration-100 cursor-pointer"
        />
      )}
    </>
  );
};

export default SpaceIcon;
