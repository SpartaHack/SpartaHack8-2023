import { useEffect, useRef, useState } from 'react';
import { MessageType } from '../../types';

const useAutoScroll = (chatLog: MessageType[]) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = chatContainerRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 50;
        setUserHasScrolled(!atBottom);
      }
    };
    chatContainerRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      chatContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current && !userHasScrolled) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatLog, userHasScrolled]);

  return chatContainerRef;
};

export default useAutoScroll;