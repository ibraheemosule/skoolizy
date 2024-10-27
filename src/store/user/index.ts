import { create } from 'zustand';

type TUserStore = {
  email: string;
  update: (arg: Partial<TUserStore>) => void;
};

const userStore = create<TUserStore>((set) => ({
  email: '',

  update: (arg: Partial<TUserStore>) => set((state) => ({ ...state, ...arg })),
}));

export default userStore;
