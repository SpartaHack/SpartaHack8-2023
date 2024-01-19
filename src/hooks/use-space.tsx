import { useEffect, useState } from "react";
import { auth } from "../../db/firebase";
import useAuth from "./use-auth";
import { getSpace } from "@/app/api/space";
import { useContentStore } from "@/context/content-store";

export const useSpace = (spaceId: string) => {
  const { setContents } = useContentStore();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const userId = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (spaceId && (auth.currentUser?.uid || userId) && !fetched) {
        setLoading(true);
        try {
          const response = await getSpace(
            auth.currentUser?.uid || userId!,
            spaceId,
          );
          setFetched(true);
          if (response && response.data) {
            setContents(response.data);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching space data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [userId, auth.currentUser?.uid, spaceId]);

  return { loading };
};
