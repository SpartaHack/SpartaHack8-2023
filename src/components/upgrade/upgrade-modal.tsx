import React, { useState, FC } from "react";
import { CustomButton } from "@/helpers/custom-btn";
import { Tabs, Tab } from "@nextui-org/react";
import { TabContent } from "./tab-content";

const UpgradeModal = () => {
  const [selected, setSelected] = useState<string>("monthly");

  const handleTabChange = (key: string | number) => {
    setSelected(String(key));
  };

  const handleClick = () => {
    console.log(`Clicked ${selected}`);
  };

  return (
    <div className="pb-6">
      <Tabs variant="light" color="primary" fullWidth className="rounded-xl dark:border-neutral-700 bg-absolute_white dark:bg-black" selectedKey={selected} onSelectionChange={handleTabChange}>
        <Tab key="monthly" title="Monthly">
          <TabContent price="$8" />
        </Tab>
        <Tab key="yearly" title="Yearly 20% off">
          <TabContent price="$10" />
        </Tab>
      </Tabs>
      <CustomButton title='Continue' btnStyling="bg-black dark:bg-white mt-5 lg:mb-0 mb-7 text-white dark:text-black dark:white font-semibold font-sans flex items-center justify-center rounded-xl w-full" btnType='button' clickEvent={handleClick}/>
      <div className="border-t-[0.5px] text-primary"/>
    </div>
  );
};

export default UpgradeModal;