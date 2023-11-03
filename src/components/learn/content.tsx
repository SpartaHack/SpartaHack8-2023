'use client'
import React, { useState } from 'react';
import { ContentProps } from '../../../types';
import YoutubeVideo from './content/youtube-video';
import Tabs from './tabs';
import PDF from './content/pdf';

const Content = ({type}: ContentProps) => {
  return (
    <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
        {type === "youtube" &&
            <YoutubeVideo/>
        } 
        {type === "pdf" &&
            <PDF/>
        }
      <div className="lg:tabs-lg tabs-sm">
        <Tabs/>
      </div>
    </div>
  );
};

export default Content;
