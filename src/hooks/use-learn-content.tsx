import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import {
  generateContentQuestions,
  generateContentSummary,
  getContent,
} from "@/app/api/endpoints";
import useStore from "./use-store";
import { useLearnStore } from "@/context/learn-context";

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const { updateLearnContent, setLearnContent } = useLearnStore();

  useEffect(() => {
    const fetchData = async () => {
      if (contentId && auth.currentUser?.uid && !fetched) {
        setLoading(true); 
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
        if (
          (!response?.data?.generations?.questions ||
            !response?.data?.generations?.summary)
        ) {
          setLoading(true)
          const summaryResponse = await generateContentSummary(
            auth.currentUser?.uid!,
            contentId,
          );
          const questionsResponse = await generateContentQuestions(
            auth.currentUser?.uid!,
            contentId,
          );

          const summary = summaryResponse?.data;
          const questions = questionsResponse?.data;

          updateLearnContent({
            generations: {
              summary,
              questions,
            },
          });
          setLoading(false)
        }
        setLoading(false);
        setFetched(true);
      };
    }
    fetchData();
  }, [contentId, spaceId, learnContent, updateLearnContent, fetched]);

  return { loading };
};