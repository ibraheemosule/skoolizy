import { create } from 'zustand';

type TUserStore = {
  email: string;
  tag: string;
  update: (arg: Partial<TUserStore>) => void;
};

const userStore = create<TUserStore>((set) => ({
  email: '',
  tag: '',

  update: (arg: Partial<TUserStore>) => set((state) => ({ ...state, ...arg })),
}));

export default userStore;
