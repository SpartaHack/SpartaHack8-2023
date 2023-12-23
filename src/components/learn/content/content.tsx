"use client";
import React from "react";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import TabComponent from "../tabs/tab-component";
import useStore from "@/hooks/use-store";
import { useLearnStore } from "@/context/learn-context";
import { useSearchParams } from "next/navigation";
import { useLearnContent } from "@/hooks/use-learn-content";
import Loading from "@/app/loading";

const Content = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const params = useSearchParams();
  const contentId = params.get("c");
  const spaceId = params.get("s");
  const { loading } = useLearnContent(contentId!, learnContent?.content_url!, spaceId!)
  const type = learnContent?.type!;

  return (
    <main className="flex-grow min-h-screen">
      {loading ? (<Loading/>) : ( 
      <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
        {type === "youtube" && <YoutubeVideo />}
        {(type === "pdf" || type === "arxiv") && <PDF />}
        <div className="lg:tabs-lg tabs-sm">
          <TabComponent />
        </div>
      </div>
      )}
    </main>
  );
};

export default Content;
