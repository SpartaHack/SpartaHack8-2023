import React from "react";
import ChatSubmit from "./chat-submit";
import { useContainerHeight } from "@/hooks/use-container-height";
import { ScrollShadow } from "@nextui-org/react";
import useChatSubmit from "@/hooks/use-chat-submit";
import useCopyToClipboard from "@/hooks/use-copy-clipboard";
import Message from "./message";
import TypingIndicator from "../../../helpers/typing-indicator";
import { removeUndefinedFromSources } from "@/functions/remove-undefined-sources";
import ChatQuestions from "./chat-questions";
import useChatlogLength from "@/hooks/use-chatlog-length";
import { useStore } from "zustand";
import { useLearnStore } from "@/context/learn-context";
import useAutoScroll from "@/hooks/use-auto-scroll";
import useAuth from "@/hooks/use-auth";

const Chat = () => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const type = learnContent?.type!;
  const dimensions = useContainerHeight({ type: type });
  const userId = useAuth();
  const {
    handleChatSubmit,
    chatLog: chatSubmitLog,
    isLoading: isChatSubmitting,
  } = useChatSubmit(
    "content",
    learnContent?.chatLog!,
    userId!,
    learnContent?.content_id!,
    learnContent?.space_id ? learnContent?.space_id! : "",
  );
  const { copiedState, copyToClipboard } = useCopyToClipboard();
  let chatLog = [...chatSubmitLog];
  chatLog = removeUndefinedFromSources(chatLog);
  const { removeQuestions } = useChatlogLength(chatLog);
  const chatContainerRef = useAutoScroll(chatLog);

  return (
    <div
      className="lg:h-full h-[70vh] flex-col flex"
      style={
        type === "youtube" || type === "mediaspace"
          ? { maxHeight: `${dimensions.elementHeight - 90}px` }
          : { maxHeight: `${dimensions.elementHeight - 100}px` }
      }
    >
      <ScrollShadow
        size={5}
        hideScrollBar
        ref={chatContainerRef}
        className="flex-grow rounded-lg"
      >
        <div
          id="chat-container"
          className="flex-grow overflow-hidden overflow-y-auto rounded-lg"
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
          questions={learnContent?.generations.questions!}
          chatQuestionClick={(question) => handleChatSubmit(question)}
          loading={false}
        />
      )}
      <div className="mt-3">
        <ChatSubmit
          onMessageSubmit={handleChatSubmit}
          isLoading={isChatSubmitting}
        />
      </div>
    </div>
  );
};

export default Chat;
