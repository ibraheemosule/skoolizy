import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IBannerOptions } from '~shared-ts-types/react-types';

type TGlobalStore = {
  bannerOptions: IBannerOptions[];
  token: string | null;
  sessionEnd: boolean;
  returnPage: string;
  update: (arg: Partial<TGlobalStore>) => void;
};

const globalStore = create<TGlobalStore>()(
  devtools(
    persist(
      (set) => ({
        bannerOptions: [],
        token: null,
        sessionEnd: false,
        returnPage: '',

        update: (arg: Partial<TGlobalStore>) => {
          set((state) => ({ ...state, ...arg }));
        },
      }),
      {
        name: 'skoolizy-global-store',
      }
    )
  )
);

export default globalStore;
