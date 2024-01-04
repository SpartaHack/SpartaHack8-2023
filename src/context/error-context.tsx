import { create } from "zustand";
import { ErrorStoreProps } from "../../types";
import { AxiosError } from "axios";

export const useErrorStore = create<ErrorStoreProps>((set) => ({
  error: undefined,
  showToast: false,
  setError: (error: AxiosError | undefined) => set({ error }),
  setToast: (value: boolean) => set({ showToast: value }),
}));
