import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type TAuthStore = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  update: (arg: Partial<TAuthStore>) => void;
};

const authStore = create<TAuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        isAuthenticated: false,

        update: (arg: Partial<TAuthStore>) =>
          set((state) => ({ ...state, ...arg })),

        login: (token: string) =>
          set((state) => ({
            ...state,
            isAuthenticated: true,
            token,
          })),

        logout: () =>
          set((state) => ({
            ...state,
            isAuthenticated: false,
            token: null,
          })),
      }),
      {
        name: 'auth-store',
        partialize: (state) => ({
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);

export default authStore;
