import React, { useEffect, useState } from "react";
import { MessageType } from "../../types";

const useChatlogLength = (chatLog: MessageType[]) => {
  const [removeQuestions, setRemoveQuestions] = useState(false);

  useEffect(() => {
    const length = chatLog.length;
    setRemoveQuestions(length == 1);
  }, [chatLog]);

  return { removeQuestions };
};

export default useChatlogLength;
