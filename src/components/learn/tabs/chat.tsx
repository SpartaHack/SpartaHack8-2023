import React from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';

const Chat = () => {
  const height = useContainerHeight();
  return (
    <div className='flex flex-col justify-between' style={{minHeight: `${height-130}px`}}>
      <div className='flex-grow overflow-hidden overflow-y-auto rounded-lg text-[50px]' style={{maxHeight: `${height-190}px`}}>
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
        TEXT FOR DUMMIES
      </div>
      <ChatSubmit 
        onMessageSubmit={function (message: string): void {
        throw new Error('Function not implemented.')
      } } isLoading={false}/>
    </div>
  )
}

export default Chat