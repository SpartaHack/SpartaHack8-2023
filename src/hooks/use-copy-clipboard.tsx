import { useState } from "react";

const useCopyToClipboard = () => {
  const [copiedState, setCopiedState] = useState({});

  const copyToClipboard = (text: string, index: number) => {
    const key = `${index}`;
  
    if (typeof window !== 'undefined') {
      const domainName = window.location.origin;
      navigator.clipboard.writeText(domainName + text).then(() => {
        setCopiedState({ ...copiedState, [key]: true });
        setTimeout(() => {
          setCopiedState({ ...copiedState, [key]: false });
        }, 2000);
      });
    } else {
      console.error("Cannot access window object");
    }
  };

  return { copiedState, copyToClipboard };
};
export default useCopyToClipboard;
