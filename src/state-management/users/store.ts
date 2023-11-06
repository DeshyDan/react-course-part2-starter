import { create } from "zustand";

interface User {
    user: string;
    login: (username: string) => void;
    logout: () => void;
}

const useUserStore = create<User>((set) => ({
    user: "",
    login: (username) => set(() => ({ user: username })),
    logout: () => set(() => ({ user: "" })),
}));
export default useUserStore;
