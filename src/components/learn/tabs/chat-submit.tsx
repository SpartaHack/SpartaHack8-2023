import React, { useState } from 'react';
import { ChatSubmitProps } from '../../../../types';
import { Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react/dist/iconify.js';

const ChatSubmit = ({ onMessageSubmit, isLoading }: ChatSubmitProps) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage !== '') {
      onMessageSubmit(trimmedMessage);
      setMessage('');
    } else {
    }
  };

  return (
    <div className='pt-2 mt-2'>
      <form
        className="flex w-full items-center align-items:center border border-neutral-300 dark:border-neutral-700 rounded-[10px] pl-3 flex-grow h-[42.5px] bg-white dark:bg-neutral-800"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full focus:outline-none bg-inherit h-auto mr-1"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="border-none bg-transparent pr-1 focus:outline-none">
          {isLoading ? (
            <Spinner size='sm' className='mt-2 mr-1'/>
          ) : (
            <Icon icon="ph:paper-plane" className="header-icons gradient text-[35px] rounded-[10px] dark:text-neutral-900" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatSubmit;
