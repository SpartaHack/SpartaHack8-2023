"use client";
import React from "react";
import PriceCard from "@/helpers/price-card";
import {
  freePlanBenefits,
  premiumMonthlyPlanBenefits,
} from "@/functions/tier-constants";
import { useRouter } from "next/navigation";
import CustomModal from "@/helpers/custom-modal";
import UpgradeModal from "@/components/upgrade/upgrade-modal";
import { PROYEARLYPRICE } from "../../../utils/constants";
import TrustedBy from "./trusted-by";

const Upgrade = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    localStorage.setItem("historyLoading", "true");
    router.push("/");
  };

  return (
    <>
      <div className="mt-[50px]  lg:mt-12 w-full flex items-center justify-center text-center">
        <div className="lg:block hidden flex-col lg:pt-8 px-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-center font-sans">
            Save hours, learn better, and share more.
          </h1>
          {/* <h1 className="mt-6 lg:mb-12 mb-10 text-center lg:text-base text-[12px] font-sans px-4">
            Saves hours a day watching videos and reading articles, just a
            little investment can 10x your productivity.
          </h1> */}
          <TrustedBy />
        </div>
      </div>
      <div className="lg:hidden block mb-10 text-5xl font-sans font-semibold text-center">
          <h1>
            Pricing
          </h1>
        </div>
      <div className="flex flex-col lg:mt-10 mb-[50px] lg:flex-row lg:justify-center lg:space-x-[100px] lg:space-y-0 space-y-[100px] items-center w-full">
        <PriceCard
          plan="Free"
          price={
            <>
              $0
              <span className="font-light lg:text-[18px] text-[15px]">
                &nbsp; / month
              </span>
            </>
          }
          subTitle="Start your learning journey here."
          planBenefits={freePlanBenefits}
          buttonText={"Get Started"}
          buttonStyle=" bg-absolute_white dark:bg-neutral-900 lg:mt-16 mt-5 mb-7 text-black dark:text-white font-semibold font-sans flex items-center justify-center rounded-xl h-[50.5px] w-full border-1 border-black dark:border-white"
          handleClick={handleHomeClick}
        />

        <PriceCard
          plan="Pro"
          price={
            <>
              {`$${PROYEARLYPRICE}`}
              <span className="font-light lg:text-[18px] text-[15px]">
                &nbsp; / month
              </span>
              <span className="text-[11px] ml-2 font-light font-sans">
                Billed annually*
              </span>
            </>
          }
          subTitle="Elevate your learning journey to the highest level."
          planBenefits={premiumMonthlyPlanBenefits}
          buttonText={
            <CustomModal
              size="3xl"
              placement="center"
              footer={false}
              title={
                <div className="w-screen">
                  <h1 className="h-[50.5px] border text-center flex items-center justify-center">
                    Start your 14 day free trial
                  </h1>
                </div>
              }
              contentMain={<UpgradeModal />}
            />
          }
          buttonStyle="bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl h-[50.5px] w-full"
        />
      </div>
    </>
  );
};

export default Upgrade;
