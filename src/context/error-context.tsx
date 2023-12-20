import { create } from "zustand";
import { ErrorStoreProps } from "../../types";

export const useErrorStore = create<ErrorStoreProps>()((set) => ({
  error: undefined,
  setError: (error) => set({ error }),
}));
