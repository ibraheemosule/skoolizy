import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import globalStore from '../globalStore';
import { BANNER_DEFAULT_TIMEOUT, getUid } from '~utils';

export type TAuthStore = {
  token: string | null;
  sessionEnd: boolean;
  returnPage: string;
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
        returnPage: '',

        update: (arg: Partial<TAuthStore>) =>
          set((state) => ({ ...state, ...arg })),

        login: (arg) =>
          set((state) => ({
            ...state,
            token: arg.access_token,
            verified: arg.verified,
            tag: arg.tag,
          })),

        logout: () => {
          setTimeout(() => {
            globalStore.getState().update({
              bannerOptions: [
                {
                  id: getUid(),
                  type: 'success',
                  timeout: BANNER_DEFAULT_TIMEOUT,
                  text: 'You have successfully logged out!',
                },
              ],
            });
          }, 100);
          globalStore.getState().update({
            bannerOptions: [],
          });

          set((state) => ({
            ...state,
            verified: false,
            token: null,
          }));
        },
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
