import React from 'react'
import { useContentStore } from "@/context/content-store";
import useStore from "@/hooks/use-store";
import { Icon } from '@iconify/react/dist/iconify.js';

const NoSpaceContent = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  return (
    <>
      {contents && contents.contents.length == 0 && 
       (
        <div className='flex w-full mt-24 flex-col items-center justify-center'>
          <div className='flex flex-row'>
            <h1 className='text-2xl'>
              Add a content to this space
            </h1>
            <Icon icon='fluent:arrow-sprint-16-regular' className='w-8 h-8' style={{ transform: 'rotate(-30deg)' }}/>
          </div>
          <h2 className='font-light mt-4 text-neutral-500'>
            Learn in half the time.
          </h2>
        </div>
       )
      }
    </>  
  )
}

export default NoSpaceContent