import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { HistoryStore } from "../../types";

export const useHistoryStore = create<
  HistoryStore,
  [["zustand/persist", HistoryStore | undefined]]
>(
  persist(
    (set) => ({
      history: [],
      setHistory: (history) => set({ history }),
      deleteContentFromHistoryState: (contentId) =>
        set((state) => ({
          history: state.history.filter(
            (content: { content: { content_id: string } }) =>
              content.content.content_id !== contentId,
          ),
        })),
      logOut: () => set({ history: [] }),
    }),
    {
      name: "contentStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
