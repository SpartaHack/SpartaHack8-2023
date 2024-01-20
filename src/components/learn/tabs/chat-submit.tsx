import React, { useState } from "react";
import { ChatSubmitProps } from "../../../../types";
import { Spinner } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { auth } from "../../../../db/firebase";
import useAuth from "@/hooks/use-auth";

const ChatSubmit = ({ onMessageSubmit, isLoading }: ChatSubmitProps) => {
  const userId = useAuth();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (auth?.currentUser?.uid || userId!){
      const trimmedMessage = message.trim();
      if (trimmedMessage !== "") {
        onMessageSubmit(trimmedMessage);
        setMessage("");
      }
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
        autoFocus
        placeholder={(auth?.currentUser?.uid || userId!) ? "Type your message here..." : "Please sign in to chat..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="border-none bg-transparent pr-1 focus:outline-none"
      >
        {isLoading ? (
          <Spinner size="sm" color="secondary" className="mt-2 mr-1" />
        ) : (
          <Icon
            icon="ph:paper-plane-fill"
            className={`p-2 gradient text-[35px] rounded-xl dark:text-neutral-900 ${(auth?.currentUser?.uid || userId!) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          />
        )}
      </button>
    </form>
  );
};

export default ChatSubmit;
