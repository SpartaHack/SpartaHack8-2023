import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Content, ContentStore } from '../../types';
  
export const useContentStore = create<ContentStore, [["zustand/persist", Content[] | undefined]]>(
    persist(
        (set) => ({
            contents: [],
            setContents: (contents) => set({ contents }),
            addContent: (content) => set((state) => ({ contents: [...state.contents || [], content] })),
            deleteContent: (id) => set((state) => ({ contents: state.contents.filter(content => content._id !== id) })),
            logout: () => set({ contents: []}),
        }),
            {
            name: 'contentStore',
            storage: createJSONStorage(() => localStorage),
            }
)
);