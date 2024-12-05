import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TUserStore = {
  email: string;
  tag: string;
  verified: boolean;
  update: (arg: Partial<TUserStore>) => void;
};

const userStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        email: '',
        tag: '',
        verified: false,

        update: (arg: Partial<TUserStore>) =>
          set((state) => ({ ...state, ...arg })),
      }),
      {
        name: 'skoolizy-user-store',
        partialize: (state) => ({
          tag: state.tag,
          verified: state.verified,
        }),
      }
    )
  )
);

export default userStore;
