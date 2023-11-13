'use client'
import React, { useState } from 'react';
import { ContentProps } from '../../../../types';
import YoutubeVideo from './youtube-video';
import PDF from './pdf';
import TabComponent from '../tabs/tab-component';

const Content = ({type}: ContentProps) => {
  return (
    <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
        {type === "youtube" &&
            <YoutubeVideo seconds={5000}/>
        } 
        {type === "pdf" &&
            <PDF/>
        }
      <div className="lg:tabs-lg tabs-sm">
        <TabComponent/>
      </div>
    </div>
  );
};

export default Content;
