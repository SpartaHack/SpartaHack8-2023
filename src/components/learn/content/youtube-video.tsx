import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useVideoOptions } from "@/hooks/use-video-options";
import useSeekToSource from "@/hooks/use-seek-to-source";
import { useLearnStore } from "@/context/learn-context";
import { YoutubeVideoProps } from "../../../../types";
import { Skeleton } from "@nextui-org/react";

const YoutubeVideo = ({ contentId, loading }: YoutubeVideoProps) => {
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
      {loading ? (
        <Skeleton
          style={{
            height: `${videoOpts.height}px`,
            width: `${videoOpts.width}px`,
          }}
        />
      ) : (
        <YouTube
          videoId={contentId && contentId}
          opts={videoOpts}
          onReady={onReady}
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
