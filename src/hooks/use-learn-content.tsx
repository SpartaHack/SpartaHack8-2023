import { useEffect, useState, useRef } from "react";
import { auth } from "../../db/firebase";
import { getContent } from "@/app/api/generation";
import { useLearnStore } from "@/context/learn-context";
import { isAxiosError } from "axios";
import { useErrorStore } from "@/context/error-context";
import useAuth from "./use-auth";
import { useRouter } from "next/navigation";

export const useLearnContent = (
  contentId: string,
  contentURL: string,
  spaceId?: string,
) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const fetchedRef = useRef(false);
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((store) => store.setToast);
  const { setLearnContent } = useLearnStore();
  const userId = useAuth();

  useEffect(() => {
    if (contentId && !fetchedRef.current) {
      setLoading(true);
      fetchedRef.current = true;

      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        try {
          let response;
          const uid = user?.uid || userId || "anonymous";
          if (!spaceId) {
            response = await getContent(uid, contentId, contentURL);
          } else {
            response = await getContent(uid, contentId, contentURL, spaceId);
          }
          if (response && response.data) {
            response.data.space_id = spaceId;
            setLearnContent(response.data);
          }
        } catch (err) {
          if (isAxiosError(err)) {
            setToast!(true);
            setError(err);
            router.push("/");
          }
        } finally {
          setLoading(false);
          unsubscribe();
        }
      });
    }
  }, [contentId, userId, spaceId]);

  return { loading };
};
