import React from 'react'
import YouTube from 'react-youtube'
import { useVideoOptions } from '@/hooks/use-video-options';
import { contentId } from '../../../../utils';
import { YoutubeVideoProps } from '../../../../types';
import useSeekToSource from '@/hooks/use-seek-to-source';

const YoutubeVideo = ({source}: YoutubeVideoProps ) => {
  const videoOpts = useVideoOptions();
  const { onReady, seekToSource } = useSeekToSource('youtube');

  seekToSource(source)
  
  return (
    <div className="rounded-[10px] overflow-hidden">
      <YouTube videoId={contentId} opts={videoOpts} onReady={onReady}/>
    </div>
  )
}

export default YoutubeVideo