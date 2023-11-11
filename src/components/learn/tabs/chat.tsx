import React from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';
import useChatSubmit from '@/hooks/use-chat-submit';
import { contentId, course_id, user_id } from '../../../../utils';
import useCopyToClipboard from '@/hooks/use-copy-clipboard';
import Message from './message';
import TypingIndicator from '../../../helpers/typing-indicator';

const Chat = () => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});
  const { handleChatSubmit, chatLog: chatSubmitLog, isLoading: isChatSubmitting } = useChatSubmit( [{type: "bot", response: "Welcome to the chat! Ask me anything. I may not always be right, but your feedback will help me improve!"}], user_id, contentId, course_id);

  const { copiedState, copyToClipboard } = useCopyToClipboard();
  const chatLog = [ ...chatSubmitLog];

  return (
    <div className='lg:h-full h-[70vh] flex-col flex'  style={{maxHeight: `${height-90}px`}}>
      <ScrollShadow 
        size={5} 
        hideScrollBar 
        className='flex-grow rounded-lg' 
      >
          <div id="chat-container" className="flex-grow overflow-hidden overflow-y-auto rounded-xl">
            {chatLog.map((message, index) => (
              <Message
                key={index}
                message={message}
                copiedState={copiedState}
                copyToClipboard={copyToClipboard} index={index}/>
            ))}
            <div className='pl-2'>
              {(isChatSubmitting) && <TypingIndicator />}        
            </div>
          </div>
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