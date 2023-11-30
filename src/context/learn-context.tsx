import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LearnStore, LearnContent, Content, MessageType } from "../../types";

export const useLearnStore = create<
  LearnStore,
  [["zustand/persist", LearnStore | undefined]]
>(
  persist(
    (set, get) => ({
      learnContent: undefined,
      chatLog: [],
      setLearnContent: (content) => set({ learnContent: content }),
      updateLearnContent: (
        updatedContent: Partial<
          Content & LearnContent & { chatLog: MessageType[] }
        >,
      ) =>
        set((state) => ({
          learnContent: state.learnContent
            ? {
                ...state.learnContent,
                generations: {
                  ...state.learnContent.generations,
                  ...updatedContent.generations,
                },
                metadata: {
                  ...state.learnContent.metadata,
                  ...updatedContent.metadata,
                },
                source: updatedContent.source
                  ? updatedContent.source
                  : state.learnContent.source,
                chatLog: updatedContent.chatLog
                  ? [...updatedContent.chatLog]
                  : [...state.chatLog],
              }
            : undefined,
          chatLog: updatedContent.chatLog
            ? [...updatedContent.chatLog]
            : state.chatLog,
        })),
      clearContent: () => set({ learnContent: undefined, chatLog: [] }),
    }),
    {
      name: "contentStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
