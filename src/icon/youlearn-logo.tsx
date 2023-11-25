"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { YouLearnLogoProps } from "../../types";

const YouLearnLogo = ({ size, tier, height, width }: YouLearnLogoProps) => {
  return (
    <div className="flex flex-row justify-between">
      {size === "lg" && (
        <>
          <Link href="/" className="dark:hidden">
            <Image
              src="youlearn.svg"
              alt="YouLearn"
              width={width ? width : 110}
              height={height ? height : 110}
            />
          </Link>
          <Link href="/" className="dark:block hidden">
            <Image
              src="youlearnDark.svg"
              alt="YouLearn"
              width={width ? width : 110}
              height={height ? height : 110}
            />
          </Link>
        </>
      )}
      {size === "sm" && (
        <Link href="/">
          <Image
            src="youlearnMedia.svg"
            alt="YouLearnMedia"
            width={width ? width : 35}
            height={height ? height : 35}
          />
        </Link>
      )}
    </div>
  );
};

export default YouLearnLogo;
