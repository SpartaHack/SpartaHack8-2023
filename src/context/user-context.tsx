import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { UserState } from '../../types';

export const useUserStore = create<UserState, [["zustand/persist", UserState | undefined]]>(
  persist(
    (set) => ({
      userId: undefined,
      userData: undefined,
      setUserId: (userId) => set({ userId }),
      setUserData: (data) => set({ userData: data }),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);