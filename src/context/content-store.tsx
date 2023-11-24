import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ContentStore } from '../../types';

export const useContentStore = create<ContentStore, [["zustand/persist", ContentStore | undefined]]>(
  persist(
    (set) => ({
      contents: [],
      setContents: (contents) => set({ contents }),
      addContent: (content) => set((state) => ({ contents: [...state.contents || [], content] })),
      deleteContentFromState: (contentID) => set((state) => ({ 
        ...state,
        contents: {
          ...state.contents,
          contents: state.contents.contents.filter((content: { content_id: string; }) => content.content_id !== contentID)
        }
      })),
      logout: () => set({ contents: [] }),
    }),
    {
      name: 'contentStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);