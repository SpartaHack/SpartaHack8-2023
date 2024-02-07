import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useVideoOptions } from "@/hooks/use-video-options";
import useSeekToSource from "@/hooks/use-seek-to-source";
import { useLearnStore } from "@/context/learn-context";

const YoutubeVideo = () => {
  const { learnContent } = useLearnStore();
  const videoOpts = useVideoOptions();
  const { onReady, seekToSource } = useSeekToSource("youtube");

  useEffect(() => {
    if (learnContent?.source) {
      seekToSource(parseFloat(learnContent.source));
    }
  }, [learnContent?.source]);

  return (
    <div className="rounded-lg overflow-hidden">
      <YouTube
        videoId={learnContent?._id ? learnContent._id : learnContent?.id!}
        opts={videoOpts}
        onReady={onReady}
      />
    </div>
  );
};

export default YoutubeVideo;
