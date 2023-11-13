import { useRef } from 'react'
import { PlayerProps } from '../../types';

const useSeekToSource = (type: string) => {
  const playerRef = useRef<PlayerProps | null>(null);

  const onReady = (event: { target: PlayerProps }) => {
    if (type === 'youtube') {
      playerRef.current = event.target;
    }
  };

  const seekToSource = (seconds: number) => {
    if (type === 'youtube' && playerRef.current) {
      playerRef.current.seekTo(seconds);
    }
  }

  return { onReady, seekToSource };
}

export default useSeekToSource