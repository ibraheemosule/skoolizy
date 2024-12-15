export const userStoreInitialState = (arg?: Omit<TUserStore, 'update'>) => ({
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
  picture: arg?.picture || '',
});

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
  picture: string;
  update: (arg: Partial<TUserStore>) => void;
};
