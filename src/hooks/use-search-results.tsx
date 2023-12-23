import { useEffect, useState } from "react";
import { searchAll } from "@/app/api/search";
import { SearchType } from "../../types";
import { isAxiosError } from "axios";
import { useErrorStore } from "@/context/error-context";
import useAuth from "./use-auth";

const useSearchResults = (query: string) => {
  const setError = useErrorStore((state) => state.setError);
  const [searchResults, setSearchResults] = useState<SearchType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const userId = useAuth();

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await searchAll(1, 10, query, userId);
          setSearchResults(response?.data);
        } catch (error) {
          if (isAxiosError(error)) {
            setError(error);
          }
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [userId, query]);

  return { searchResults, isLoading };
};

export default useSearchResults;