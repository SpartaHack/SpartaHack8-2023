import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Chat from "./chat";
import Summary from "./summary";
import Quiz from "./quiz";
import ChatSkeleton from "./chat-skeleton";
import SummarySkeleton from "./summary-skeleton";
import { TabProps } from "../../../../types";
import { useGenerations } from "@/hooks/use-generations";

const TabComponent = ({ contentId, spaceId }: TabProps) => {
  const { loading } = useGenerations(contentId, spaceId);
  return (
    <div className="flex flex-col w-full h-full p-3 overflow-hidden dark:bg-black rounded-lg">
      <Tabs
        variant="light"
        color="primary"
        fullWidth
        className="border rounded-lg dark:border-neutral-700 bg-absolute_white dark:bg-black"
      >
        <Tab title="Chat" className="h-full">
          {loading ? <ChatSkeleton /> : <Chat />}
        </Tab>
        <Tab title="Summary" className="h-full">
          {loading ? <SummarySkeleton /> : <Summary />}
        </Tab>
        {/* <Tab title="Quiz" className="h-full">
          <Quiz />
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default TabComponent;
