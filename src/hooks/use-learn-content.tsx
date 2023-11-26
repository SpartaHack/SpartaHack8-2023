import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { useLearnStore } from "@/context/learn-context";
import { auth } from "../../db/firebase";
import {
  generateContentQuestions,
  generateContentSummary,
  getContent,
} from "@/app/api/endpoints";

export const useLearnContent = (contentId: string, spaceId?: string) => {
  const [loading, setLoading] = useState(true);
  const setLearnContent = useStore(
    useLearnStore,
    (state) => state.setLearnContent,
  );

  useEffect(() => {
    const initialLoadingState = typeof window !== 'undefined' && window.localStorage.getItem('loading') === 'false' ? false : true;
    setLoading(initialLoadingState);

    if (contentId && auth.currentUser?.uid) {
      const fetchData = async () => {
        let response;
        await generateContentSummary(auth.currentUser?.uid!, contentId!);
        await generateContentQuestions(auth.currentUser?.uid!, contentId!);
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
        setLoading(false);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('loading', 'false');
        }
      };
      fetchData();
    }
  }, [contentId, spaceId, setLearnContent]);

  return { loading };
};