import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import { chatHistory } from "@/app/api/generation";
import { convertChatHistoryToChatLog } from "@/functions/chat-history-to-logs";
import { replaceMessage } from "../../utils";
import { MessageType } from "../../types";
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import useAuth from "./use-auth";

const useChatHistory = () => {
  const userId = useAuth();
  const contents = useStore(useContentStore, (state) => state.contents);
  const [historyChat, setHistoryChat] = useState<MessageType[]>([]);

  useEffect(() => {
    if (contents) {
      const fetchChatHistory = async () => {
        const response = await chatHistory(
          auth.currentUser?.uid! || userId!,
          "space",
          "",
          contents?.space._id!,
        );
        let fetchedHistoryChat: MessageType[] = convertChatHistoryToChatLog(
          response?.data ? response.data : [],
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
