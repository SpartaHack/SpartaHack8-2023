import React from 'react'
import ChatSubmit from './chat-submit'

const Chat = () => {
  return (
    <div className='flex flex-col h-[60vh] lg:h-full justify-between'>
      <div className='border h-full rounded-lg'>
        chat
      </div>
      <ChatSubmit 
        onMessageSubmit={function (message: string): void {
        throw new Error('Function not implemented.')
      } } isLoading={false}/>
    </div>
  )
}

export default Chat