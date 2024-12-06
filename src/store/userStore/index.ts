import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import secureStorage from '~src/store/userStore/utils-userStore';

export type TUserStore = {
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

const initialState = (arg?: Omit<TUserStore, 'update'>) => ({
  email: arg?.email || '',
  tag: arg?.tag || '',
  verified: arg?.verified || false,
  nationality: arg?.nationality || '',
  firstName: arg?.firstName || '',
  lastName: arg?.lastName || '',
  middleName: arg?.middleName || '',
  gender: arg?.gender || '',
  homeAddress: arg?.homeAddress || '',
  phoneNumber: arg?.phoneNumber || '',
  state: arg?.state || '',
  dateOfBirth: arg?.dateOfBirth || '',
});

const userStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState(),
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
export default userStore;
