import React from 'react'
import YouTube from 'react-youtube'
import { useVideoOptions } from '@/hooks/use-video-options';
import { contentId } from '../../../../utils';

const YoutubeVideo = () => {
  const videoOpts = useVideoOptions();
  
  return (
    <div className="rounded-[10px] overflow-hidden">
      <YouTube videoId={contentId} opts={videoOpts}/>
    </div>
  )
}

export default YoutubeVideo