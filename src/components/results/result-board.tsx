"use client";
import React, { useEffect, useState } from "react";
import useSearchResults from "@/hooks/use-search-results";
import Loading from "@/app/loading";
import { ResultBoardProps, SearchType } from "../../../types";
import ContentCard from "../dashboard/content-card";
import NoResultsFound from "./no-results-found";
import { auth } from "../../../db/firebase";

const ResultsBoard = ({ query }: ResultBoardProps) => {
  const { userId, searchResults, isLoading } = useSearchResults(query);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userId]);

  if (!userId && !auth.currentUser?.uid && !loading) {
    return (
      <NoResultsFound
        message="Sign in / Sign up to Search!"
        button_route="/signin"
        button_title="SignIn"
      />
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-grow">
      <main className="flex my-12 pb-2 justify-center w-full px-10">
        <div className="grid gap-6 md:gap-12 lg:gap-20 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {searchResults &&
            searchResults.map((result: SearchType, index: number) => (
              <ContentCard
                key={index}
                contentAdd
                type={result.content_type}
                contentID={result.content_id}
                title={result.title}
                contentURL={result.content_url}
                thumbnail_url={result.thumbnail_url}
                showDelete={false}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default ResultsBoard;
