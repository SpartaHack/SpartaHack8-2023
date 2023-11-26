import { useEffect } from "react";
import { useStore } from "zustand";
import { useLearnStore } from "@/context/learn-context";
import { auth } from "../../db/firebase";
import { generateContentQuestions, generateContentSummary, getContent } from "@/app/api/endpoints";

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const setLearnContent = useStore(
    useLearnStore,
    (state) => state.setLearnContent,
  );

  useEffect(() => {
    if (contentId && auth.currentUser?.uid) {
      const fetchData = async () => {
        let response;
        await generateContentSummary(auth.currentUser?.uid!, contentId!)
        await generateContentQuestions(auth.currentUser?.uid!, contentId!)
        if (spaceId) {
          response = await getContent(
            auth.currentUser?.uid!,
            contentId,
            spaceId,
          );
          if (response && response.data) {
            response.data.space_id = spaceId;
          }
        } else {
          response = await getContent(auth.currentUser?.uid!, contentId);
        }
        if (response?.data) {
          setLearnContent(response.data);
        }
      };
      fetchData();
    }
  }, [contentId, spaceId, setLearnContent]);
};
