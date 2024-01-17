import { useState } from "react";

const useCopyToClipboard = () => {
  const [copiedState, setCopiedState] = useState({});

  const copyToClipboard = (text: string, index: number) => {
    const key = `${index}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedState({ ...copiedState, [key]: true });
      setTimeout(() => {
        setCopiedState({ ...copiedState, [key]: false });
      }, 2000);
    });
  };

  return { copiedState, copyToClipboard };
};
export default useCopyToClipboard;
