import React, { useState } from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';

const Chat = () => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});

  const handleChatSubmit = () => {

  }

  return (
    <div className='h-full flex-col flex'>
      <ScrollShadow 
        size={5} 
        hideScrollBar 
        className='flex-grow overflow-hidden overflow-y-auto rounded-lg' 
      >
      </ScrollShadow>
      <div className="mt-3">
        <ChatSubmit
          onMessageSubmit={handleChatSubmit} isLoading={false}
        />
      </div>
    </div>
  )
}

export default Chat