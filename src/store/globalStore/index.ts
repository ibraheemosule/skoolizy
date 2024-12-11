import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IBannerOptions } from '~shared-ts-types/react-types';

export type TGlobalStore = {
  bannerOptions: IBannerOptions[];
  token: string | null;
  sessionEndUser: string;
  returnPage: string;
  update: (arg: Partial<TGlobalStore>) => void;
};

export const globalStore = create<TGlobalStore>()(
  devtools(
    persist(
      (set) => ({
        bannerOptions: [],
        token: null,
        sessionEndUser: '',
        returnPage: '',

        update: (arg: Partial<TGlobalStore>) => {
          set((state) => ({ ...state, ...arg }));
        },
      }),
      {
        name: 'skoolizy-global-store',
        partialize: (state) => ({
          token: state.token,
          sessionEndUser: state.sessionEndUser,
          returnPage: state.returnPage,
        }),
      }
    )
  )
);
