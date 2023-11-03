import React from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';

const Chat = () => {
  const height = useContainerHeight();
  return (
    <div style={{minHeight: `${height-180}px`}}>
      <div className='flex-grow overflow-hidden overflow-y-auto rounded-lg text-[50px] border' style={{maxHeight: `${height-180}px`}}>
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
      </div>
    </div>
  )
}

export default Chat