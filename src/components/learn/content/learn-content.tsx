import React from "react";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import Video from "./video";
import { LearnContentProps } from "../../../../types";

const LearnContent = ({ type, contentId }: LearnContentProps) => {
  return (
    <>
      {type === "youtube" && <YoutubeVideo contentId={contentId!} />}
      {(type === "pdf" || type === "arxiv") && <PDF />}
      {type === "mediaspace" && <Video />}
    </>
  );
};

export default LearnContent;
