import { useEffect, useState } from "react";

export const useVideoOptions = () => {
    const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
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
  
    return videoOpts;
  };
  