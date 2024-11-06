import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type TAuthStore = {
  token: string | null;
  staySignedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  update: (arg: Partial<TAuthStore>) => void;
};

const authStore = create<TAuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        staySignedIn: false,

        update: (arg: Partial<TAuthStore>) =>
          set((state) => ({ ...state, ...arg })),

        login: (token: string) =>
          set((state) => ({
            ...state,
            staySignedIn: true,
            token,
          })),

        logout: () =>
          set((state) => ({
            ...state,
            staySignedIn: false,
            token: null,
          })),
      }),
      {
        name: 'auth-store',
        partialize: (state) => ({
          token: state.token,
          staySignedIn: state.staySignedIn,
        }),
      }
    )
  )
);

export default authStore;
