import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import {
  chatHistory,
  generateContentQuestions,
  generateContentSummary,
  getContent,
} from "@/app/api/generation";
import { useLearnStore } from "@/context/learn-context";
import { convertChatHistoryToChatLog } from "@/functions/chat-history-to-logs";
import { MessageType } from "../../types";
import { replaceMessage } from "../../utils";
import { isAxiosError } from "axios";
import { useErrorStore } from "@/context/error-context";

export const useLearnContent = (
  contentId: string,
  contentURL: string,
  spaceId?: string,
) => {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const setError = useErrorStore((state) => state.setError);
  const { updateLearnContent, setLearnContent, learnContent } = useLearnStore();

  useEffect(() => {
    const fetchData = async () => {
      const repeating = localStorage.getItem("repeating");
      if (
        contentId &&
        auth.currentUser?.uid &&
        !fetched &&
        repeating == "false"
      ) {
        localStorage.setItem("repeating", "true");
        setLoading(true);
        try {
          let response;
          if (!spaceId) {
            response = await getContent(
              auth.currentUser?.uid!,
              contentId,
              contentURL,
            );
          } else {
            response = await getContent(
              auth.currentUser?.uid!,
              contentId,
              contentURL,
              spaceId,
            );
            if (response && response.data) {
              response.data.space_id = spaceId;
            }
          }
          setLearnContent!(response?.data);
          if (
            !response?.data?.generations?.questions ||
            !response?.data?.generations?.summary
          ) {
            try {
              const summaryResponse = await generateContentSummary(
                auth.currentUser?.uid!,
                contentId
              );
              const questionsResponse = await generateContentQuestions(
                auth.currentUser?.uid!,
                contentId
              );
              const summary = summaryResponse?.data;
              const questions = questionsResponse?.data;

              updateLearnContent({
                generations: {
                  summary,
                  questions,
                },
              });
            } catch (err) {
              if (isAxiosError(err)) {
                setError(err);
              }
            }
          }
          const historyResponse = await chatHistory(
            auth.currentUser.uid!,
            "content",
            contentId,
            spaceId ? spaceId! : "",
          );
          if (historyResponse) {
            let chatLog: MessageType[] = convertChatHistoryToChatLog(
              historyResponse.data
            );

            chatLog.forEach((message) => {
              if (message.type === "bot") {
                const replacedResult = replaceMessage(
                  learnContent?.type!,
                  message.response
                );
                message.response = replacedResult.replacedMessage;
                message.sources = replacedResult.sources;
              }
            });

            updateLearnContent({
              chatLog: chatLog,
            });
          }
        } catch (error) {
          console.error("An error occurred while fetching data:", error);
        } finally {
          setLoading(false);
          setFetched(true);
        }
      }
    };

    fetchData();
  }, [contentId, auth.currentUser?.uid, spaceId]);

  return { loading };
};
