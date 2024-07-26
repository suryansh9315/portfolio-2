import { create } from 'zustand'

const useStore = create((set) => ({
  contactOpen: false,
  loading: true,
  setContactOpen: () => set((state) => ({ contactOpen: !state.contactOpen })),
  setLoadingTrue: () => set({ loading: true}),
  setLoadingFalse: () => set({ loading: false})
}))

export default useStore;