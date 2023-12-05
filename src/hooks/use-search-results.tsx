import { useEffect, useState } from "react";
import { searchAll } from "@/app/api/endpoints";
import { auth } from "../../db/firebase";
import { SearchType } from "../../types";

const useSearchResults = (query: string) => {
  const [searchResults, setSearchResults] = useState<undefined | SearchType[]>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const repeat = localStorage.getItem("searchLoading");
    const fetchData = async () => {
      if (repeat == "true" && auth.currentUser?.uid) {
        setIsLoading(true);
        try {
          const response = await searchAll(
            1,
            10,
            query,
            auth.currentUser?.uid!,
          );
          localStorage.setItem("searchLoading", "false");
          setSearchResults(response?.data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { searchResults, isLoading };
};

export default useSearchResults;
