import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { SpaceStore, getUserSpaceResponse } from '../../types'

export const useSpaceStore = create<SpaceStore, [["zustand/persist", getUserSpaceResponse[] | undefined]]>(
  persist(
    (set) => ({
      spaces: [],
      setSpaces: (spaces) => set({ spaces }),
      addSpaceToState: (space) => set((state) => ({ spaces: [...state.spaces || [], space] })),
      logout: () => set({ spaces: []}),
    }),
    {
      name: 'spaceStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);