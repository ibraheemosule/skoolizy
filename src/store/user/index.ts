import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TUserStore = {
  email: string;
  tag: string;
  verified: boolean;
  nationality: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  homeAddress: string;
  phoneNumber: string;
  state: string;
  dateOfBirth: string;
  update: (arg: Partial<TUserStore>) => void;
};

const userStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        email: '',
        tag: '',
        verified: false,
        nationality: '',
        firstName: '',
        lastName: '',
        middleName: '',
        gender: '',
        homeAddress: '',
        phoneNumber: '',
        state: '',
        dateOfBirth: '',
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
