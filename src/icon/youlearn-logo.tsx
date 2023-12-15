"use client";
import React from "react";
import Image from "next/image";
import { YouLearnLogoProps } from "../../types";
import { useRouter } from "next/navigation";

const YouLearnLogo = ({ size, tier, height, width }: YouLearnLogoProps) => {
  const router = useRouter();
  const returnHome = () => {
    localStorage.setItem("historyLoading", "true");
    router.push("/");
  };
  return (
    <div className="flex flex-row justify-between">
      {size === "lg" && (
        <>
          <Image
            src="youlearn.svg"
            alt="YouLearn"
            className="dark:hidden cursor-pointer"
            width={width ? width : 110}
            height={height ? height : 110}
            onClick={returnHome}
          />
          <Image
            src="youlearnDark.svg"
            alt="YouLearn"
            className="dark:block cursor-pointer hidden"
            width={width ? width : 110}
            height={height ? height : 110}
            onClick={returnHome}
          />
        </>
      )}
      {size === "sm" && (
        <Image
          src="youlearnMedia.svg"
          alt="YouLearnMedia"
          className="cursor-pointer"
          width={width ? width : 35}
          height={height ? height : 35}
          onClick={returnHome}
        />
      )}
    </div>
  );
};

export default YouLearnLogo;
