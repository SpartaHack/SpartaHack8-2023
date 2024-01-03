"use client";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";
import React from "react";
import { NoResultsFoundProps } from "../../../types";

const NoResultsFound = ({
  message = "No results found",
  button_route = "/",
  button_title = "Back to home",
}: NoResultsFoundProps) => {
  const router = useRouter();
  const handleReset = () => {
    localStorage.setItem("historyLoading", "true");
    router.push(button_route);
  };
  return (
    <div className="flex-col flex-grow flex items-center justify-center">
      <h1 className="text-2xl font-sans font-semibold mr-1">{message}</h1>
      <CustomButton
        title={button_title}
        btnType="button"
        btnStyling="font-sans mt-10 h-[50.5px] dark:bg-white text-md font-semibold w-[60%] md:w-[20%] bg-black text-white dark:text-black mb-4"
        clickEvent={handleReset}
      />
    </div>
  );
};

export default NoResultsFound;
