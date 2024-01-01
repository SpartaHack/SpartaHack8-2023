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
      <div className="lg:h-screen">
        <div className="relative w-full overflow-hidden rounded-xl" style={{paddingTop: '53.5%'}}>
          <iframe
            key={videoUrl}
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
