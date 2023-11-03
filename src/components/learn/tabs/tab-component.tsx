import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { TabOptions } from "../../../../utils/constants";
import ChatSubmit from "./chat-submit";

const TabComponent = () => {

  return (
    <div className="flex flex-col w-full h-full p-3 overflow-hidden">
      <Tabs items={TabOptions} fullWidth>
        {(item) => (
          <Tab key={item.label} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
      <div className="ml-1 mr-1">
        <ChatSubmit
          onMessageSubmit={function (message: string): void {
          throw new Error('Function not implemented.')
          } } isLoading={false}
        />
      </div>
    </div>  
  );
}

export default TabComponent;