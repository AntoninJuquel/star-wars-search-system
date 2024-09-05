import { login } from "@/services/api";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AuthenticationState {
  token: string | null;
}

export interface AuthenticationActions {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthenticationStore
  extends AuthenticationState,
    AuthenticationActions {}

export const useAuthentication = create<AuthenticationStore>()(
  persist(
    (set) => ({
      token: null,
      login: async (username, password) => {
        const token = await login(username, password);
        set({ token });
      },
      logout: () => {
        set({ token: null });
      },
    }),
    { name: "authentication", storage: createJSONStorage(() => sessionStorage) }
  )
);

export const useToken = () => useAuthentication((state) => state.token);
