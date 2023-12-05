'use client'
import React from 'react';
import useSearchResults from '@/hooks/use-search-results';
import Loading from '@/app/loading';
import { ResultBoardProps, SearchType } from '../../../types';

const ResultsBoard = ({ query }: ResultBoardProps) => {
  const { searchResults, isLoading } = useSearchResults(query);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex-grow">
      {searchResults && searchResults.map((result: SearchType, index: number) => (
        <div key={index}>
          <h2>{result.title}</h2>
        </div>
      ))}
    </div>  
  )
};

export default ResultsBoard;