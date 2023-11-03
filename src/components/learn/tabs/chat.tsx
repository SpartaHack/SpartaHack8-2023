import React from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';

const Chat = () => {
  const height = useContainerHeight();
  return (
    <>
      <div style={{minHeight: `${height-190}px`}}>
        <ScrollShadow size={5} hideScrollBar className='flex-grow overflow-hidden overflow-y-auto rounded-lg text-[50px]' style={{maxHeight: `${height-140}px`}}>
          TEXT FOR DUMMIES sadad
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
          TEXT FOR DUMMIES
        </ScrollShadow>
      </div>
      <div className="mt-3">
      <ChatSubmit
        onMessageSubmit={function (message: string): void {
        throw new Error('Function not implemented.')
        } } isLoading={false}
      />
    </div>
    </>
  )
}

export default Chat