"use client";
import React from "react";
import TabComponent from "../tabs/tab-component";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";
import { useContainerHeight } from "@/hooks/use-container-height";
import ErrorMessage from "@/helpers/error-message";
import { ContentProps } from "../../../../types";
import LearnContent from "./learn-content";
import Chapters from "./chapters";
import { useLearnContent } from "@/hooks/use-learn-content";
import { Skeleton } from "@nextui-org/react";

const Content = ({ contentId, spaceId }: ContentProps) => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const { loading } = useLearnContent(
    contentId!,
    learnContent?.content_url!,
    spaceId!,
  );
  const type = learnContent?.type!;
  const { elementHeight, elementWidth } = useContainerHeight({
    type: type,
    chapters: true,
  });
  return (
    <main className="flex-grow min-h-screen">
      <ErrorMessage />
      <div className="flex flex-col">
        <div className="flex flex-col w-full pt-2 px-2 sm:p-4 lg:flex-row">
          {type && (
            <LearnContent type={type} contentId={contentId} loading={loading} />
          )}
          <div
            className="lg:tabs-lg tabs-sm"
            style={
              type == "youtube" ? {} : { height: `${elementHeight - 25}px` }
            }
          >
            {loading ? (
              <Skeleton className="h-full w-full rounded-lg" />
            ) : (
              <TabComponent spaceId={spaceId} contentId={contentId} />
            )}
          </div>
        </div>
        <div
          className="pb-4 px-2 lg:pr-2 2xl:px-0 md:pr-2 mt-2 md:mt-0"
          style={{ width: `${elementWidth}px` }}
        >
          {loading && (
            <Skeleton className="md:ml-4 border h-64 md:h-96 w-full rounded-md" />
          )}
          {!loading && (
            <div className="md:ml-4 min-h-24 flex flex-col rounded-md bg-absolute_white dark:bg-black">
              <Chapters contentId={contentId} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Content;
