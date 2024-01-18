import { useEffect, useState } from "react";
import { searchAll } from "@/app/api/search";
import { SearchType } from "../../types";
import useAuth from "./use-auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useSearchResults = (query: string) => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<SearchType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const userId = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await searchAll(1, 10, query, userId || "anonymous");
        setSearchResults(response?.data);
      } catch (error) {
        toast.error("Something went wrong. Redirecting to home");
        router.push("/");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId, query]);

  return { userId, searchResults, isLoading };
};

export default useSearchResults;
