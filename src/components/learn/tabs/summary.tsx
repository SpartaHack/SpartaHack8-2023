import React from 'react'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';

const Summary = () => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});
  return (
    <div className='h-full flex-col flex'>
      <ScrollShadow size={5} hideScrollBar className='flex-grow overflow-hidden overflow-y-auto rounded-lg'>
      </ScrollShadow>
    </div>
  )
}

export default Summary