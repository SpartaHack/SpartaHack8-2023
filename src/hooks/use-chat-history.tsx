import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import { chatHistory } from "@/app/api/endpoints";
import { convertChatHistoryToChatLog } from "@/functions/chat-history-to-logs";
import { replaceMessage } from "../../utils";
import { MessageType } from "../../types";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";

const useChatHistory = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const [historyChat, setHistoryChat] = useState<MessageType[]>([]);

  useEffect(() => {
    const chatHistoryLoading = localStorage.getItem("chatHistoryLoading");
    if (contents && chatHistoryLoading === "true") {
      const fetchChatHistory = async () => {
        const response = await chatHistory(
          auth.currentUser?.uid!,
          "space",
          [],
          [contents?.space._id!],
        );
        localStorage.setItem("chatHistoryLoading", "false");
        let fetchedHistoryChat: MessageType[] = convertChatHistoryToChatLog(
          response?.data,
        );

        fetchedHistoryChat.forEach((message) => {
          if (message.type === "bot") {
            const replacedResult = replaceMessage(
              contents.contents.type!,
              message.response,
            );
            message.response = replacedResult.replacedMessage;
            message.sources = replacedResult.sources;
          }
        });

        setHistoryChat(fetchedHistoryChat);
      };

      fetchChatHistory();
    }
  }, [contents]);

  return historyChat;
};

export default useChatHistory;
