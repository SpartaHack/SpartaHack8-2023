import React from "react";
import {Tabs, Tab } from "@nextui-org/react";
import { TabOptions } from "../../../../utils/constants";

const TabComponent = () => {

  return (
    <div className="flex flex-col w-full h-full p-3 overflow-hidden">
      <Tabs items={TabOptions} fullWidth>
        {(item) => (
          <Tab key={item.label} title={item.label}>
            <div>
              <div className="dark:bg-neutral-800">
                {item.content}
              </div>
            </div>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}

export default TabComponent;