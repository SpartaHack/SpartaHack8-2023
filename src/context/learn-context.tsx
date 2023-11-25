import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LearnStore } from "../../types";

export const useLearnStore = create<
  LearnStore,
  [["zustand/persist", LearnStore | undefined]]
>(
  persist(
    (set) => ({
        learnContent: undefined,
        setLearnContent: (content) => set({ learnContent: content }),
        clearContent: () => set({ learnContent: undefined })
    }),
    {
      name: "contentStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
