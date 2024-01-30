import { useEffect, useRef, useState, useCallback } from "react";
import { MessageType } from "../../types";

const useAutoScroll = (chatLog: MessageType[]) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentRef = chatContainerRef.current;
    if (currentRef) {
      const { scrollTop, clientHeight, scrollHeight } = currentRef;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setUserHasScrolled(!atBottom);
    }
  }, []);

  useEffect(() => {
    const currentRef = chatContainerRef.current;

    currentRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const currentRef = chatContainerRef.current;

    if (currentRef && !userHasScrolled) {
      const scrollToBottom = () => {
        if (currentRef.scrollHeight > currentRef.clientHeight) {
          currentRef.scrollTop = currentRef.scrollHeight;
        }
      };

      const animationFrame = requestAnimationFrame(scrollToBottom);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [chatLog, userHasScrolled]);

  return chatContainerRef;
};

export default useAutoScroll;
