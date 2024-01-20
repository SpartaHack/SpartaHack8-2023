import { useEffect, useState } from "react";
import useAuth from "./use-auth";
import { getSpace } from "@/app/api/space";
import { useContentStore } from "@/context/content-store";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { useErrorStore } from "@/context/error-context";
import { auth } from "../../db/firebase";

export const useSpace = (spaceId: string) => {
  console.log(spaceId)
  const router = useRouter();
  const { setContents } = useContentStore();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((store) => store.setToast);
  const userId = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (spaceId && !fetched) {
        setLoading(true);
        try {
          const response = await getSpace(
            auth.currentUser?.uid || userId! || "anonymous",
            spaceId,
          );
          setFetched(true);
          if (response && response.data) {
            setContents(response.data);
            setLoading(false);
          }
        } catch (err) {
          if (isAxiosError(err)) {
            setLoading(false);
            setToast!(true);
            setError(err);
            router.push("/");
          }
        }
      }
    };

    fetchData();
  }, [userId, auth.currentUser?.uid, spaceId]);

  return { loading };
};
