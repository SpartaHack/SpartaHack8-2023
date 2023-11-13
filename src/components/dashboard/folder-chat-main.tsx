import { ScrollShadow } from '@nextui-org/react'
import React from 'react'
import ChatSubmit from '../learn/tabs/chat-submit'
import useCopyToClipboard from '@/hooks/use-copy-clipboard';
import useChatSubmit from '@/hooks/use-chat-submit';
import Message from '../learn/tabs/message';
import TypingIndicator from '@/helpers/typing-indicator';
import { contentId, course_id, user_id } from '../../../utils';

const FolderChatMain = () => {
  const { handleChatSubmit, chatLog: chatSubmitLog, isLoading: isChatSubmitting } = useChatSubmit( 'course', [{type: "bot", response: "Welcome to the chat! Ask me anything. I may not always be right, but your feedback will help me improve!"}], user_id, contentId, course_id);

  const { copiedState, copyToClipboard } = useCopyToClipboard();
  const chatLog = [ ...chatSubmitLog];
  return (
    <>
        <ScrollShadow         
            size={5} 
            hideScrollBar 
            className='flex-grow rounded-lg h-full'>
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
                onMessageSubmit={handleChatSubmit} isLoading={isChatSubmitting}
            />
        </div>
    </>
  )
}

export default FolderChatMain