"use client";
import React from "react";
import useSearchResults from "@/hooks/use-search-results";
import Loading from "@/app/loading";
import { ResultBoardProps, SearchType } from "../../../types";
import ContentCard from "../dashboard/content-card";
import { auth } from "../../../db/firebase";

const ResultsBoard = ({ query }: ResultBoardProps) => {
  const { searchResults, isLoading } = useSearchResults(
    query,
    auth.currentUser!.uid,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex-grow">
      <main className="lg:my-10 h-full lg:pb-10 md:my-5 lg:ml-6 md:pt-0 pt-10 pb-10 flex justify-center md:px-20 text-center">
        <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
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
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default ResultsBoard;
