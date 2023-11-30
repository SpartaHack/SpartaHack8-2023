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

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const { updateLearnContent, setLearnContent } = useLearnStore();

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
          const historyResponse = await chatHistory(auth.currentUser.uid!, 'content', [contentId], [spaceId!])
          if (historyResponse) {
            const chatLog = convertChatHistoryToChatLog(historyResponse.data)
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