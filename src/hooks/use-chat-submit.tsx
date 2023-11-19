import { useState } from "react";
import { MessageType } from "../../types";
import { replaceMessage } from "../../utils";
import { chatContent, chatSpace } from "@/app/api/endpoints";

const useChatSubmit = (type: string, initialChatLog: MessageType[], user_id: string, contentId: string, space_id: string) => {
  const [chatLog, setChatLog] = useState<MessageType[]>(initialChatLog);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (query: string) => {
    setChatLog((prev) => [
      ...prev,
      { type: "user", response: query, sources: [] },
    ]);
  
    setIsLoading(true);
    let response;

    if (type === 'content') {
      response = await chatContent(user_id, space_id, contentId, query, {}, false, false);
    } else {
      response = await chatSpace(user_id, space_id, contentId, query, {}, false, false)
    }

    if (!response.body) {
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let message = "";
    setIsLoading(false)

    new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              setIsLoading(false);
              return;
            }
            const chunk = decoder.decode(value, {stream: true});
            message += chunk;
            const replacedResult = replaceMessage(type, message);
            message = replacedResult.replacedMessage;
            setChatLog((prev) => {
              if (prev.length > 0 && prev[prev.length - 1].type === "bot") {
                const lastMessage = prev[prev.length - 1];
                if (!lastMessage.response.endsWith(message)) {
                  lastMessage.response = message;
                  lastMessage.sources = replacedResult.sources;
                }
                return [...prev];
              } else {
                return [
                  ...prev,
                  { type: "bot", response: message, sources: replacedResult.sources },
                ];
              }
            });
            controller.enqueue(value);
            push();
          });
        }
        push();
      },
    });
  };
  
  return { handleChatSubmit, chatLog, isLoading };
}

export default useChatSubmit;