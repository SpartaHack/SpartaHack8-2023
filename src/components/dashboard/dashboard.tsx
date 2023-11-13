'use client'
import React from 'react';
import { defaultCourseContent } from '../../../utils/constants';
import ContentCard from './content-card';
import FolderChat from './folder-chat';

const Dashboard = () => {
  return (
    <main className="lg:mt-10 lg:mb-10 md:mt-5 md:mb-5 lg:ml-6 py-10 flex justify-center md:px-20 text-center">
      <div className="grid gap-5 md:gap-10 lg:gap-15 2xl:grid-cols-4 md:grid-cols-3 md:w-full justify-center">
        {defaultCourseContent.map((content, key) => (
          <ContentCard key={key} type={content.type} contentID={content.contentID} title={content.title} thumbnail_url={content.thumbnail}/>
        ))}
      </div> 
      <div className='fixed z-2 bottom-0 right-0 drop-shadow-lg lg:mr-10 lg:mb-10 mr-5 mb-5'>
        <FolderChat/>
      </div> 
    </main>
  );
};

export default Dashboard;