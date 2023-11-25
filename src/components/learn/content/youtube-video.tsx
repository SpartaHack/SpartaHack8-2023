import React from "react";
import YouTube from "react-youtube";
import { useVideoOptions } from "@/hooks/use-video-options";
import { YoutubeVideoProps } from "../../../../types";
import useSeekToSource from "@/hooks/use-seek-to-source";
import { useSearchParams } from "next/navigation";

const YoutubeVideo = ({ source }: YoutubeVideoProps) => {
  const videoOpts = useVideoOptions();
  const { onReady, seekToSource } = useSeekToSource("youtube");
  const parms = useSearchParams();
  const contentId = parms.get("c");

  seekToSource(source);

  return (
    <div className="rounded-xl overflow-hidden">
      <YouTube videoId={contentId!} opts={videoOpts} onReady={onReady} />
    </div>
  );
};

export default YoutubeVideo;
