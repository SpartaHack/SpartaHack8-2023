'use client'
import { useVideoOptions } from '@/providers/use-video-options';
import React from 'react'
import YouTube from 'react-youtube'

const YoutubeVideo = () => {
  const videoOpts = useVideoOptions();
  
  return (
    <div className="rounded-[10px] overflow-hidden">
      <YouTube videoId='jA6A6H6zzF4' opts={videoOpts}/>
    </div>
  )
}

export default YoutubeVideo