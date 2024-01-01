"use client";
import React from "react";
import useSearchResults from "@/hooks/use-search-results";
import Loading from "@/app/loading";
import { ResultBoardProps, SearchType } from "../../../types";
import ContentCard from "../dashboard/content-card";

const ResultsBoard = ({ query }: ResultBoardProps) => {
  const { searchResults, isLoading } = useSearchResults(query);

  if (isLoading) {
    return <Loading />;
  }
  if (!searchResults || searchResults.length === 0) {
    return (
      <div className="flex-grow">
        <div className="flex my-12 pb-2 justify-center w-full px-10">
          <p>No results found.</p>
        </div>
      </div>
    );
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
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default ResultsBoard;
