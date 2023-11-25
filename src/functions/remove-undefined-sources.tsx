import { MessageType } from "../../types";

export function removeUndefinedFromSources(chatArray: MessageType[]) {
  return chatArray.map((chat) => {
    if (chat.sources) {
      chat.sources = chat.sources.filter((source) => source !== undefined);
    }
    return chat;
  });
}
