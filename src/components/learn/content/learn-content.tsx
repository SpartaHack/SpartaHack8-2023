import React from "react";
import YoutubeVideo from "./youtube-video";
import PDF from "./pdf";
import Video from "./video";
import { LearnContentProps } from "../../../../types";

const LearnContent = ({ type }: LearnContentProps) => {
  return (
    <>
      {type === "youtube" && <YoutubeVideo />}
      {(type === "pdf" || type === "arxiv") && <PDF />}
      {type === "mediaspace" && <Video />}
    </>
  );
};

export default LearnContent;
