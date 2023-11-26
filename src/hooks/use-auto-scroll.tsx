import { useEffect, useRef, useState } from "react";
import { MessageType } from "../../types";

const useAutoScroll = (chatLog: MessageType[]) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const currentRef = chatContainerRef.current;
    const handleScroll = () => {
      if (currentRef) {
        const { scrollTop, clientHeight, scrollHeight } = currentRef;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
        setUserHasScrolled(!atBottom);
      }
    };
    currentRef?.addEventListener("scroll", handleScroll);
    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current && !userHasScrolled) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatLog, userHasScrolled]);

  return chatContainerRef;
};

export default useAutoScroll;
