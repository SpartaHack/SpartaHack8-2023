import React from 'react'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';

const Summary = () => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});
  return (
    <div style={{minHeight: `${height-190}px`}}>
      <ScrollShadow size={5} hideScrollBar className='flex-grow overflow-hidden overflow-y-auto rounded-lg text-[50px]' style={{maxHeight: `${height-90}px`}}>
        TEXT FOR DUMMIES sadad
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
      </ScrollShadow>
    </div>
  )
}

export default Summary