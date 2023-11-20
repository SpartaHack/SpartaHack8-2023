import { ScrollShadow } from '@nextui-org/react'
import React from 'react'
import ChatSubmit from '../learn/tabs/chat-submit'
import useCopyToClipboard from '@/hooks/use-copy-clipboard';
import useChatSubmit from '@/hooks/use-chat-submit';
import Message from '../learn/tabs/message';
import TypingIndicator from '@/helpers/typing-indicator';
import { content_id, space_id, user_id } from '../../../utils';
import { removeUndefinedFromSources } from '@/functions/remove-undefined-sources';

const SpaceChatMain = () => {
  const { handleChatSubmit, chatLog: chatSubmitLog, isLoading: isChatSubmitting } = useChatSubmit( 'space', [{type: "bot", response: "Welcome to the space chat! Ask me anything in this space! Give feedback for improvements!"}], user_id, content_id, space_id);

  const { copiedState, copyToClipboard } = useCopyToClipboard();
  let chatLog = [ ...chatSubmitLog];
  chatLog = removeUndefinedFromSources(chatLog)

  return (
    <>
        <ScrollShadow         
            size={5} 
            hideScrollBar 
            className='flex-grow rounded-xl h-full'>
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

export default SpaceChatMain