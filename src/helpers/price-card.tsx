import React from "react";
import { CustomButton } from "@/helpers/custom-btn";
import { PriceCardProps } from "../../types";
import { useRouter } from "next/navigation";

const PriceCard = ({
  plan,
  price,
  subTitle,
  planBenefits,
  buttonText,
  buttonStyle,
  handleClick,
}: PriceCardProps) => {
  const router = useRouter();
  return (
    <div className="rounded-xl justify-between bg-white w-[75%] lg:h-[470px] h-fit px-[60px] lg:w-[35%] border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-900 p-3  text-left hover:shadow-xl hover:scale-105 transition duration-300">
      <h1 className="lg:text-md text-sm mt-5 lg:mt-7 font-semibold font-sans">
        {plan}
      </h1>
      <h1 className="text-3xl my-2 font-bold font-sans">{price}</h1>
      <h2 className="lg:text-[15px] mb-5 lg:mb-8">{subTitle}</h2>
      {planBenefits.map((benefit, index) => (
        <div className="flex flex-row w-full justify-left" key={index}>
          {benefit.icon}
          <span className="mb-2 lg:mb-5 lg:text-base text-[12px]">
            {benefit.label}
          </span>
        </div>
      ))}
      <CustomButton
        btnStyling={buttonStyle}
        title={buttonText}
        btnType="button"
        clickEvent={handleClick}
      />
    </div>
  );
};

export default PriceCard;
