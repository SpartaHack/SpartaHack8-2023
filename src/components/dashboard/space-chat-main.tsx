import { ScrollShadow } from "@nextui-org/react";
import React, { useEffect } from "react";
import ChatSubmit from "../learn/tabs/chat-submit";
import useCopyToClipboard from "@/hooks/use-copy-clipboard";
import useChatSubmit from "@/hooks/use-chat-submit";
import Message from "../learn/tabs/message";
import TypingIndicator from "@/helpers/typing-indicator";
import { removeUndefinedFromSources } from "@/functions/remove-undefined-sources";
import ChatQuestions from "../learn/tabs/chat-questions";
import useChatlogLength from "@/hooks/use-chatlog-length";
import { auth } from "../../../db/firebase";
import useStore from "@/hooks/use-store";
import { useContentStore } from "@/context/content-store";
import useFetchChatHistory from "@/hooks/use-chat-history";
import useAutoScroll from "@/hooks/use-auto-scroll";
import { space } from "postcss/lib/list";

const SpaceChatMain = () => {
  const contents = useStore(useContentStore, (state) => state.contents);
  const historyChat = useFetchChatHistory();
  const {
    handleChatSubmit,
    chatLog: chatSubmitLog,
    isLoading: isChatSubmitting,
  } = useChatSubmit(
    "space",
    historyChat!,
    auth.currentUser?.uid!,
    [],
    [contents?.space._id],
    true,
  );
  const { copiedState, copyToClipboard } = useCopyToClipboard();
  let chatLog = [...chatSubmitLog];
  chatLog = removeUndefinedFromSources(chatLog);
  const { removeQuestions } = useChatlogLength(chatLog);
  const chatContainerRef = useAutoScroll(chatLog);

  return (
    <>
      <ScrollShadow
        size={5}
        hideScrollBar
        ref={chatContainerRef}
        className="flex-grow rounded-xl"
      >
        <div
          id="chat-container"
          className="flex-grow overflow-hidden overflow-y-auto rounded-xl "
        >
          {chatLog.map((message, index) => (
            <Message
              key={index}
              message={message}
              copiedState={copiedState}
              copyToClipboard={copyToClipboard}
              index={index}
            />
          ))}
          <div className="pl-2">{isChatSubmitting && <TypingIndicator />}</div>
        </div>
      </ScrollShadow>
      {removeQuestions && (
        <ChatQuestions
          questions={[
            "What topics will be covered in this space?",
            "What are the learning objectives of this space?",
          ]}
          chatQuestionClick={(question) => handleChatSubmit(question)}
        />
      )}
      <div className="mt-3">
        <ChatSubmit
          onMessageSubmit={handleChatSubmit}
          isLoading={isChatSubmitting}
        />
      </div>
    </>
  );
};

export default SpaceChatMain;
