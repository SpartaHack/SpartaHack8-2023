import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useVideoOptions } from "@/hooks/use-video-options";
import useSeekToSource from "@/hooks/use-seek-to-source";
import { useLearnStore } from "@/context/learn-context";
import { YoutubeVideoProps } from "../../../../types";

const YoutubeVideo = ({ contentId }: YoutubeVideoProps) => {
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
      <YouTube videoId={contentId} opts={videoOpts} onReady={onReady} />
    </div>
  );
};

export default YoutubeVideo;
