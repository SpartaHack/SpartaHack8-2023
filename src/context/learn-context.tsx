import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LearnStore, LearnContent, Content } from "../../types";

export const useLearnStore = create<
  LearnStore,
  [["zustand/persist", LearnStore | undefined]]
>(
  persist(
    (set, get) => ({
      learnContent: undefined,
      setLearnContent: (content) => set({ learnContent: content }),
      updateLearnContent: (updatedContent: Partial<Content & LearnContent>) =>
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
              }
            : undefined,
        })),
      clearContent: () => set({ learnContent: undefined }),
    }),
    {
      name: "contentStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);