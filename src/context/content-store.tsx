import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ContentStore } from '../../types';

export const useContentStore = create<ContentStore, [["zustand/persist", ContentStore | undefined]]>(
  persist(
    (set) => ({
      contents: [],
      setContents: (contents) => set({ contents }),
      addContent: (content) => set((state) => ({ contents: [...state.contents || [], content] })),
      deleteContent: (id) => set((state) => ({ contents: state.contents.filter((content: { _id: string; }) => content._id !== id) })),
      logout: () => set({ contents: [] }),
    }),
    {
      name: 'contentStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
