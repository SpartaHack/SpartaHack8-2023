import { useEffect, useState } from "react";
import { searchAll } from "@/app/api/endpoints";
import { SearchType } from "../../types";

const useSearchResults = (query: string, userId: string) => {
  const [searchResults, setSearchResults] = useState<SearchType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        setIsLoading(true);
        try {
          const response = await searchAll(1, 10, query, userId);
          setSearchResults(response?.data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userId, query]);

  return { searchResults, isLoading };
};

export default useSearchResults;
