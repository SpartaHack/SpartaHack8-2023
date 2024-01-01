import React from "react";
import { useLearnStore } from "@/context/learn-context";
import { useStore } from "zustand";

const Video = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);

  let source;
  if (learnContent?.source) {
    source = parseInt(learnContent?.source!);
  } else {
    source = 0;
  }
  const videoUrl = learnContent?.metadata.iframe_url;

  return (
    <div className="lg:w-[70%] w-full items-center justify-center">
      <div className="h-[75vh] lg:h-screen">
        <iframe
          key={videoUrl}
          src={videoUrl}
          width="100%"
          className="rounded-xl border-none h-full lg:h-[85%]"
        />
      </div>
    </div>
  );
};

export default Video;
