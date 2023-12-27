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
      logOut: () => set({ history: [] }),
    }),
    {
      name: "contentStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
