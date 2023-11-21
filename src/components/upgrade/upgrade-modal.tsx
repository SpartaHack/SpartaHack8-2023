import React, { useState, FC } from "react";
import { CustomButton } from "@/helpers/custom-btn";
import { Tabs, Tab } from "@nextui-org/react";
import { TabContent } from "./tab-content";
import OrderSummary from "./order-summary";
import { PROMONTHLYPRICE, PROYEARLYPRICE } from "../../../utils/constants";

const UpgradeModal: FC = () => {
  const [selected, setSelected] = useState<string>("monthly");

  const handleTabChange = (key: string | number) => {
    setSelected(String(key));
  };

  const handleClick = () => {
    console.log(`Clicked ${selected}`);
  };

  return (
    <div className="pb-6 flex flex-col md:flex-row">
      <div className="flex w-full md:border-r-[0.5px] border-black dark:border-white md:pr-5 flex-col">
        <Tabs variant="light" color="primary" fullWidth className="rounded-xl dark:border-neutral-700 dark:bg-black border " selectedKey={selected} onSelectionChange={handleTabChange}>
          <Tab key="monthly" title="Monthly">
            <TabContent price={`$${PROMONTHLYPRICE}`} />
          </Tab>
          <Tab key="yearly" title={<h1>Yearly<span className="font-sans text-tertiary font-semibold"> 20% off</span></h1>}>
            <TabContent price={`$${PROYEARLYPRICE}`} />
          </Tab>
        </Tabs>
        <CustomButton title='Continue' btnStyling="bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl w-full" btnType='button' clickEvent={handleClick}/>
        <div className="border-t-[0.5px] md:hidden md:mt-6 text-primary"/>
      </div>
      <OrderSummary price={selected === "monthly" ? PROMONTHLYPRICE : PROYEARLYPRICE*12}/>
    </div>
  );
};

export default UpgradeModal;