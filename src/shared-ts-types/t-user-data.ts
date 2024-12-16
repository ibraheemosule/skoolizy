import { FileType } from './react-types';

export type TUser = {
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  country: string;
  state_of_origin: string;
  date_of_birth: string;
  email: string;
  role: string;
  picture: FileType;
  title: string;
  phone_number: string;
  home_address: string;
};

export type TUserSignupPayload = TUser & {
  picture: FileType;
  password: string;
};

export type TStaff = TUser & { picture: string };

export type TStaffs = Pick<
  TUserSignupPayload,
  'first_name' | 'middle_name' | 'last_name'
> & { tag: string; group: string; picture: string };

export type TGuardian = TUser & { picture: string };

export type TGuardians = Pick<
  TUserSignupPayload,
  'first_name' | 'middle_name' | 'last_name'
> & { tag: string; group: string; picture: string };

export type TStudent = TUser & { picture: string };

export type TStudents = Pick<
  TUserSignupPayload,
  'first_name' | 'middle_name' | 'last_name'
> & { tag: string; group: string; picture: string };
