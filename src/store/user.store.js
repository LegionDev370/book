import { create } from "zustand";

export const useUserStore = create((set) => {
  return {
    user: null,
    setUser: (data) => set((state) => ({ ...state, user: data })),
  };
});
