import { MessageType } from "../../types";

export const convertChatHistoryToChatLog = (chatHistory: MessageType[]) => {
    return chatHistory
      .map((entry: any) => [
        { type: "user", id: entry._id, response: entry.message },
        { type: "bot", id: entry._id, response: entry.response },
      ])
      .flat();
  };