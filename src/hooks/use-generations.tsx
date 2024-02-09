import { useEffect, useState, useRef } from "react";
import { auth } from "../../db/firebase";
import {
  chatHistory,
  generateContentQuestions,
  generateContentSummary,
} from "@/app/api/generation";
import { useLearnStore } from "@/context/learn-context";
import useAuth from "./use-auth";
import { convertChatHistoryToChatLog } from "@/functions/chat-history-to-logs";
import { MessageType } from "../../types";
import { replaceMessage } from "../../utils";

export const useGenerations = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(true);
  const fetchedRef = useRef(false);
  const { updateLearnContent } = useLearnStore();
  const userId = useAuth();

  const fetchData = async (uid: string) => {
    if (fetchedRef.current) {
      return;
    }
    fetchedRef.current = true;

    try {
      const summaryResponse = await generateContentSummary(uid, contentId);
      const questionsResponse = await generateContentQuestions(uid, contentId);
      const summary = summaryResponse?.data;
      const chat_prompts = questionsResponse?.data;

      if (summary && chat_prompts) {
        updateLearnContent({
          generations: { summary, chat_prompts },
        });
      }

      const historyResponse = await chatHistory(
        uid,
        "content",
        contentId,
        spaceId || "",
      );
      if (historyResponse) {
        let chatLog: MessageType[] = convertChatHistoryToChatLog(
          historyResponse.data || [],
        );
        chatLog.forEach((message) => {
          if (message.type === "bot") {
            const replacedResult = replaceMessage("", message.response);
            message.response = replacedResult.replacedMessage;
            message.sources = replacedResult.sources;
          }
        });
        updateLearnContent({ chatLog: chatLog });
      }
    } catch (error) {
      console.error("Failed to fetch generation data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentUserUid = auth.currentUser
      ? auth.currentUser.uid
      : userId || "anonymous";
    fetchData(currentUserUid);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchData(user.uid);
      } else {
        fetchData("anonymous");
      }
    });

    return () => unsubscribe();
  }, [contentId, spaceId, userId]);

  return { loading };
};
