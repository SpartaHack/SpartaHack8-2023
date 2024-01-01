"use client";
import { CustomButton } from "@/helpers/custom-btn";
import { useRouter } from "next/navigation";
import React from "react";

const NoResultsFound = () => {
  const router = useRouter();
  const handleReset = () => {
    localStorage.setItem("historyLoading", "true");
    router.push("/");
  };
  return (
    <div className="flex-col flex-grow flex items-center justify-center">
      <h1 className="text-2xl font-sans font-semibold mr-1">
        No results found
      </h1>
      <CustomButton
        title="Back to home"
        btnType="button"
        btnStyling="font-sans mt-10 h-[50.5px] dark:bg-white text-md font-semibold w-[60%] md:w-[20%] bg-black text-white dark:text-black mb-4"
        clickEvent={handleReset}
      />
    </div>
  );
};

export default NoResultsFound;
