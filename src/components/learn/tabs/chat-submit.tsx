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
    <form
      className="flex w-full bg-absolute_white dark:bg-black items-center align-items:center border border-neutral-200 dark:border-neutral-700 rounded-xl pl-3 flex-grow h-[42.5px]"
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
          <Spinner size='sm' color='secondary' className='mt-2 mr-1'/>
        ) : (
          <Icon icon="ph:paper-plane-fill" className="header-icons gradient text-[35px] rounded-xl dark:text-neutral-900" />
        )}
      </button>
    </form>
  );
};

export default ChatSubmit;
