import React, { useEffect } from 'react'
import ChatSubmit from './chat-submit'
import { useContainerHeight } from '@/hooks/use-container-height';
import { ScrollShadow } from '@nextui-org/react';
import useChatSubmit from '@/hooks/use-chat-submit';
import { content_id, space_id, user_id } from '../../../../utils';
import useCopyToClipboard from '@/hooks/use-copy-clipboard';
import Message from './message';
import TypingIndicator from '../../../helpers/typing-indicator';
import { removeUndefinedFromSources } from '@/functions/remove-undefined-sources';
import ChatQuestions from './chat-questions';
import useChatlogLength from '@/hooks/use-chatlog-length';

const Chat = () => {
  const type = 'youtube'
  const height = useContainerHeight({type: type});
  const { handleChatSubmit, chatLog: chatSubmitLog, isLoading: isChatSubmitting } = useChatSubmit( 'content', [{type: "bot", response: "Welcome to the chat! Ask me anything. I may not always be right, but your feedback will help me improve!"}], user_id, content_id, space_id);
  const { copiedState, copyToClipboard } = useCopyToClipboard();
  let chatLog = [ ...chatSubmitLog];
  chatLog = removeUndefinedFromSources(chatLog)
  const { removeQuestions } = useChatlogLength(chatLog)


  return (
    <div className='lg:h-full h-[70vh] flex-col flex ' style={{maxHeight: `${height-90}px`}}>
      <ScrollShadow 
        size={5} 
        hideScrollBar 
        className='flex-grow rounded-xl' 
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
      { removeQuestions &&
        <ChatQuestions questions={["What is life?", "What is Mona Lisa?", "What is Mona Lisa?", "What is Mona Lisa?"]} chatQuestionClick={(question) => handleChatSubmit(question)}/>
      }
      <div className="mt-3">
        <ChatSubmit
          onMessageSubmit={handleChatSubmit} isLoading={isChatSubmitting}
        />
      </div>
    </div>
  )
}

export default Chat