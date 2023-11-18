import React from "react";
import {Tabs, Tab } from "@nextui-org/react";
import Chat from "./chat";
import Summary from "./summary";
import Quiz from "./quiz";

const TabComponent = () => {

  return (
    <div className="flex flex-col w-full h-full p-3 overflow-hidden">
      <Tabs variant="light" fullWidth className="border rounded-xl dark:border-neutral-700">
          <Tab title="Chat" className="h-full dark:bg-neutral-800">
            <Chat/>
          </Tab>
          <Tab title="Summary" className="h-full dark:bg-neutral-800">
            <Summary summary={"Getting Summary"}/>
          </Tab>
          <Tab title="Quiz" className="h-full dark:bg-neutral-800">
            <Quiz/>
          </Tab>
      </Tabs>
    </div>  
  );
}

export default TabComponent;