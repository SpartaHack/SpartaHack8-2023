import { UserProfile } from 'firebase/auth';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { UserState, Subscription } from '../../types';

export const useUserStore = create<UserState, [["zustand/persist", UserState | undefined]]>(
  persist(
    (set, get) => ({
      userId: undefined,
      userData: undefined,
      setUserId: (userId) => set({ userId }),
      setUserData: (data) => set({ userData: data }),
      updateUserData: (updatedData: Partial<UserProfile & Subscription>) => set((state) => ({
        userData: state.userData ? {
          ...state.userData,
          user_profile: {
            ...state.userData.user_profile,
            ...updatedData
          },
          subscription: {
            ...state.userData.subscription,
            ...updatedData
          }
        } : undefined
      })),
      logout: () => set({ userId: undefined, userData: undefined }),
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
