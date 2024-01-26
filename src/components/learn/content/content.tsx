"use client";
import React from "react";
import TabComponent from "../tabs/tab-component";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";
import { useLearnContent } from "@/hooks/use-learn-content";
import Loading from "@/app/loading";
import { useContainerHeight } from "@/hooks/use-container-height";
import ErrorMessage from "@/helpers/error-message";
import { ContentProps } from "../../../../types";
import LearnContent from "./learn-content";

const Content = ({ contentId, spaceId }: ContentProps) => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const { loading } = useLearnContent(
    contentId!,
    learnContent?.content_url!,
    spaceId!,
  );
  const type = learnContent?.type!;
  const { elementHeight, elementWidth } = useContainerHeight({ type: type });

  return (
    <main className="flex-grow min-h-screen">
      <ErrorMessage />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
            <LearnContent type={type} />
            <div
              className="lg:tabs-lg tabs-sm"
              style={type == "youtube" ? {} : { height: `${elementHeight - 25}px` }}
            >
              <TabComponent />
            </div>
          </div>
          <div style={{width: `${elementWidth}px`}}>
            
          </div>
        </div>
      )}
    </main>
  );
};

export default Content;
