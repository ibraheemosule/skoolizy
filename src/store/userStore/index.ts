import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { secureStorage } from '../utils-store';
import { userStoreInitialState, TUserStore } from './utils-userStore';

// eslint-disable-next-line import/prefer-default-export
export const userStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        ...userStoreInitialState(),
        update: (arg: Partial<TUserStore>) =>
          set((state) => ({ ...state, ...arg })),
      }),
      {
        name: 'skoolizy-user-store',
        storage: createJSONStorage(() => secureStorage),
      }
    )
  )
);
