'use client'
import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { ContentProps } from '../../../types'
import { Tabs } from '@nextui-org/react'

const Content = ({type, contentID}: ContentProps) => {
  const window_width = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <div className="flex flex-col w-full pt-2 pl-2 pr-2 sm:p-4 lg:flex-row">
        {type === "youtube" &&
            <div className="rounded-[10px] overflow-hidden">
                <YouTube videoId={contentID}/>
            </div>
        }
        {type === "pdf" &&
            <div className="lg:w-[70%] w-full items-center justify-center">
                <div className="h-[75vh] lg:h-screen">
                    <iframe
                        src="document.pdf"
                        width="100%"
                        height="100%"
                        className='rounded-[10px] border:none'
                    />
                </div>
            </div>
        }
        <div className="bg-white rounded-[10px] w-[30%] lg:ml-4 drop-shadow-sm dark:bg-neutral-800 mt-[20px] lg:mt-0">
            <Tabs/>
        </div>
    </div>
  )
}

export default Content