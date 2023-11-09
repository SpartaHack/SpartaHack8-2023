import React, { useState } from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';

const Chat = () => {
  const type = 'pdf'
  const height = useContainerHeight({type: type});

  const handleChatSubmit = () => {

  }

  return (
    <div className='lg:h-full h-[70vh] flex-col flex border'  style={{maxHeight: `${height-90}px`}}>
      <ScrollShadow 
        size={5} 
        hideScrollBar 
        className='flex-grow rounded-lg' 
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