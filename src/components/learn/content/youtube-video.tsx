import React from 'react'
import YouTube from 'react-youtube'
import { useVideoOptions } from '@/hooks/use-video-options';

const YoutubeVideo = () => {
  const videoOpts = useVideoOptions();
  
  return (
    <div className="rounded-[10px] overflow-hidden">
      <YouTube videoId='jA6A6H6zzF4' opts={videoOpts}/>
    </div>
  )
}

export default YoutubeVideo