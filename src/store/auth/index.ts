import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type TAuthStore = {
  token: string | null;
  sessionEnd: boolean;
  login: (arg: {
    access_token: string;
    verified: boolean;
    tag: string;
  }) => void;
  logout: () => void;
  update: (arg: Partial<TAuthStore>) => void;
};

const authStore = create<TAuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        sessionEnd: false,

        update: (arg: Partial<TAuthStore>) =>
          set((state) => ({ ...state, ...arg })),

        login: (arg) =>
          set((state) => ({
            ...state,
            token: arg.access_token,
            verified: arg.verified,
            tag: arg.tag,
          })),

        logout: () =>
          set((state) => ({
            ...state,
            verified: false,
            token: null,
          })),
      }),
      {
        name: 'skoolizy-auth-store',
        partialize: (state) => ({
          token: state.token,
        }),
      }
    )
  )
);

export default authStore;
