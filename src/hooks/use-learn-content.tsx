import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import {
  generateContentQuestions,
  generateContentSummary,
} from "@/app/api/endpoints";
import useStore from "./use-store";
import { useLearnStore } from "@/context/learn-context";

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(true)
  const learnContent = useStore(useLearnStore, (state) => state.learnContent)
  const { updateLearnContent } = useLearnStore()

  useEffect(() => {
    const fetchData = async () => {
      if (contentId && auth.currentUser?.uid && (!learnContent?.generations.questions || !learnContent?.generations.summary)) {
        setLoading(true)
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
        
        setLoading(false)
      } else {
        setLoading(false)
      }
    };
    fetchData();
  }, [contentId, spaceId, learnContent, updateLearnContent]);

  return {loading}
};