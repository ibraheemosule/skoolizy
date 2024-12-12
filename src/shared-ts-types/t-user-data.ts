import { FileType } from './react-types';

export type TUserSignupPayload = {
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  country: string;
  state_of_origin: string;
  date_of_birth: string;
  email: string;
  role: string;
  profile_picture: FileType;
};
