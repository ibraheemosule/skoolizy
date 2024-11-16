import { create } from 'zustand';
import { IBannerOptions } from '~shared-ts-types/react-types';

type TGlobalStore = {
  bannerOptions: IBannerOptions[];
  prevRoute: string;
  update: (arg: Partial<TGlobalStore>) => void;
};

const globalStore = create<TGlobalStore>((set) => ({
  bannerOptions: [],
  prevRoute: '',
  update: (arg: Partial<TGlobalStore>) => {
    set((state) => ({ ...state, ...arg }));
  },
}));

export default globalStore;
