'use client'
import React, { useState } from 'react'
import YouTube from 'react-youtube'
const window_width = typeof window !== "undefined" ? window.innerWidth : 0;

const YoutubeVideo = () => {
  const [windowWidth] = useState(window_width);

  let videoWidth;
  let videoHeight;

  if (windowWidth <= 1024) {
    videoWidth = windowWidth * 0.95;
  } else {
    videoWidth = windowWidth * 0.675;
  }

  videoHeight = (videoWidth * 9) / 16;

  const videoOpts = {
    height: videoHeight.toString(),
    width: videoWidth.toString(),
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div className="rounded-[10px] overflow-hidden">
      <YouTube videoId='jA6A6H6zzF4' opts={videoOpts}/>
    </div>
  )
}

export default YoutubeVideo