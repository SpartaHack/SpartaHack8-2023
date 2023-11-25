import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ContentStore, Content } from '../../types';

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
      updateContent: (updatedContent: Partial<Content>) => set((state) => {
        if (state.contents && state.contents.space) {
          return {
            ...state,
            contents: {
              ...state.contents,
              space: state.contents.space._id === updatedContent._id ? { ...state.contents.space, ...updatedContent } : state.contents.space
            }
          }
        }
        return state;
      }),
      logout: () => set({ contents: [] }),
    }),
    {
      name: 'contentStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);