import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Chat from "./chat";
import Summary from "./summary";
import Quiz from "./quiz";

const TabComponent = () => {
  return (
    <div className="flex flex-col w-full h-full p-3 overflow-hidden dark:bg-black rounded-xl">
      <Tabs
        variant="light"
        color="primary"
        fullWidth
        className="border rounded-xl dark:border-neutral-700 bg-absolute_white dark:bg-black"
      >
        <Tab title="Chat" className="h-full">
          <Chat />
        </Tab>
        <Tab title="Summary" className="h-full">
          <Summary />
        </Tab>
        {/* <Tab title="Quiz" className="h-full">
          <Quiz />
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default TabComponent;
