import React from "react";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import Video from "./video";
import { LearnContentProps } from "../../../../types";

const LearnContent = ({ type, contentId, loading }: LearnContentProps) => {
  return (
    <>
      {type === "youtube" && (
        <YoutubeVideo loading={loading!} contentId={contentId!} />
      )}
      {(type === "pdf" || type === "arxiv") && <PDF loading={loading!} />}
      {type === "mediaspace" && <Video />}
    </>
  );
};

export default LearnContent;
