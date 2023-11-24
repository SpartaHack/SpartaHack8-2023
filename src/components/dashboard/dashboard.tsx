'use client'
import React from 'react';
import ContentCard from './content-card';
import SpaceChatBase from './space-chat-base';
import { useContentStore } from '@/context/content-store';
import useStore from '@/hooks/use-store';

const Dashboard = () => {
  const contents = useStore(useContentStore, (state) => state.contents)
  return (
    <main className="lg:my-10 h-full lg:pb-10 md:my-5 lg:ml-6 py-10 flex justify-center md:px-20 text-center">
      <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
        {contents ? contents.map((content, key) => (
          <ContentCard key={key} type={content.type} contentID={content.content_id} title={content.title} thumbnail_url={content.thumbnail_url || content.thumbnail_url}/>
        )): <>Empty here</>}
      </div> 
      <div className='fixed z-2 bottom-0 right-0 drop-shadow-lg lg:mr-10 lg:mb-10 mr-5 mb-5'>
        <SpaceChatBase/>
      </div> 
    </main>
  );
};

export default Dashboard;