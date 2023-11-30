import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import {
  chatHistory,
  generateContentQuestions,
  generateContentSummary,
  getContent,
} from "@/app/api/endpoints";
import { useLearnStore } from "@/context/learn-context";
import { convertChatHistoryToChatLog } from "@/functions/chat-history-to-logs";
import { MessageType } from "../../types";
import { replaceMessage } from "../../utils";

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const { updateLearnContent, setLearnContent, learnContent } = useLearnStore();

  useEffect(() => {
    const fetchData = async () => {
      if (contentId && auth.currentUser?.uid && !fetched) {
        setLoading(true); 
        try {
          let response;
          if (!spaceId) {
            response = await getContent(auth.currentUser?.uid!, contentId);
          } else {
            response = await getContent(auth.currentUser?.uid!, contentId, spaceId);
            if (response && response.data) {
              response.data.space_id = spaceId;
            }
          }
          setLearnContent!(response?.data);
          if (!response?.data?.generations?.questions || !response?.data?.generations?.summary) {
            const summaryResponse = await generateContentSummary(auth.currentUser?.uid!, contentId);
            const questionsResponse = await generateContentQuestions(auth.currentUser?.uid!, contentId);

            const summary = summaryResponse?.data;
            const questions = questionsResponse?.data;

            updateLearnContent({
              generations: {
                summary,
                questions,
              },
            });
          }
          console.log(learnContent?.chatLog)
          const historyResponse = await chatHistory(auth.currentUser.uid!, 'content', [contentId], [spaceId!])
          if (historyResponse) {
            let chatLog: MessageType[] = convertChatHistoryToChatLog(historyResponse.data);
            
            chatLog.forEach((message) => {
              if (message.type === "bot") {
                const replacedResult = replaceMessage(learnContent?.type!, message.response);
                message.response = replacedResult.replacedMessage;
                message.sources = replacedResult.sources;
              }
            });

            updateLearnContent({
              chatLog: chatLog
            })
          }
        } catch (error) {
          console.error("An error occurred while fetching data:", error);
        } finally {
          setLoading(false);
          setFetched(true);
        }
      };
    }

    fetchData();
  }, [contentId, auth.currentUser?.uid]);

return { loading };
};