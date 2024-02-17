import React, { useState } from "react";
import { ChatSubmitProps } from "../../../../types";
import { Spinner, Textarea } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { auth } from "../../../../db/firebase";
import useAuth from "@/hooks/use-auth";

const ChatSubmit = ({ onMessageSubmit, isLoading }: ChatSubmitProps) => {
  const userId = useAuth();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (auth?.currentUser?.uid || userId!) {
      const trimmedMessage = message.trim();
      if (trimmedMessage !== "") {
        onMessageSubmit(trimmedMessage);
        setMessage("");
      }
    }
  };

  return (
    <form
      className="flex w-full bg-absolute_white dark:bg-absolute_black items-center align-items:center border border-neutral-200 dark:border-neutral-700 rounded-lg pl-3 flex-grow min-h-[42.5px]"
      onSubmit={handleSubmit}
    >
      <Textarea
        variant="bordered"
        minRows={0}
        maxRows={5}
        className="w-full outline-none bg-transparent focus:outline-none h-full mr-1"
        classNames={{ inputWrapper: "border-none px-0 ml-0" }}
        autoFocus
        placeholder={
          auth?.currentUser?.uid || userId!
            ? "Type your message here..."
            : "Please sign in to chat..."
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
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
            className={`p-2 gradient text-[35px] rounded-md dark:text-neutral-900 ${
              auth?.currentUser?.uid || userId!
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
          />
        )}
      </button>
    </form>
  );
};

export default ChatSubmit;
