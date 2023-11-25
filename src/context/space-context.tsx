import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SpaceStore, getUserSpaceResponse } from "../../types";

export const useSpaceStore = create<
  SpaceStore,
  [["zustand/persist", getUserSpaceResponse[] | undefined]]
>(
  persist(
    (set) => ({
      spaces: [],
      setSpaces: (spaces) => set({ spaces }),
      addSpaceToState: (space) =>
        set((state) => ({ spaces: [...(state.spaces || []), space] })),
      deleteSpaceFromState: (id: string) =>
        set((state) => ({
          spaces: state.spaces.filter((space) => space._id !== id),
        })),
      updateSpaceData: (updatedData: Partial<getUserSpaceResponse>) =>
        set((state) => ({
          spaces: state.spaces
            ? state.spaces.map((space) =>
                space._id === updatedData._id
                  ? { ...space, ...updatedData }
                  : space,
              )
            : [],
        })),
      logout: () => set({ spaces: [] }),
    }),
    {
      name: "spaceStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
