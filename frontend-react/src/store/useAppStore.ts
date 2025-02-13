import { create } from "zustand";
import { User } from "../type/interface";

interface AppState {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

const useAppStore = create<AppState>((set) => ({
  user: null,
  updateUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useAppStore;
