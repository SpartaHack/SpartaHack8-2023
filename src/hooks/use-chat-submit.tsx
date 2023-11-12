import { useState } from "react";
import { MessageType } from "../../types";
import { replaceMessage } from "../../utils";
import { chatContent } from "@/app/api/endpoints";

const useChatSubmit = (initialChatLog: MessageType[], user_id: string, contentId: string, course_id: string) => {
  const [chatLog, setChatLog] = useState<MessageType[]>(initialChatLog);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (query: string) => {
    setChatLog((prev) => [
      ...prev,
      { type: "user", response: query, sources: [] },
    ]);
  
    setIsLoading(true);

    const response = await chatContent(user_id, course_id, contentId, query, {}, false, false);
      
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
            const replacedResult = replaceMessage(message);
            message = replacedResult.replacedMessage;
            console.log(replacedResult.sources)
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