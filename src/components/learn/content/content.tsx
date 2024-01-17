"use client";
import React from "react";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import TabComponent from "../tabs/tab-component";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";
import { useLearnContent } from "@/hooks/use-learn-content";
import Loading from "@/app/loading";
import { useContainerHeight } from "@/hooks/use-container-height";
import ErrorMessage from "@/helpers/error-message";
import Video from "./video";
import { ContentProps } from "../../../../types";

const Content = ({ contentId, spaceId }: ContentProps) => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const { loading } = useLearnContent(
    contentId!,
    learnContent?.content_url!,
    spaceId!,
  );
  const type = learnContent?.type!;
  const height = useContainerHeight({ type: type });

  return (
    <main className="flex-grow min-h-screen">
      <ErrorMessage />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
          {type === "youtube" && <YoutubeVideo />}
          {(type === "pdf" || type === "arxiv") && <PDF />}
          {type === "mediaspace" && <Video />}
          <div
            className="lg:tabs-lg tabs-sm"
            style={type == "youtube" ? {} : { height: `${height - 25}px` }}
          >
            <TabComponent />
          </div>
        </div>
      )}
    </main>
  );
};

export default Content;
