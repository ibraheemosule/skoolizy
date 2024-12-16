import { TUserStore } from '~src/store';

export const contactInfoFn = (arg: TUserStore) => ({
  email_address: arg.email,
  phone_number: arg.phoneNumber,
  home_address: arg.homeAddress,
  emergency_email_address: arg.email,
  emergency_phone_number: arg.phoneNumber,
});

export const contactAuthEdit = ['email_address', 'phone_number'];

export const canEdit = [
  'email_address',
  'phone_number',
  'home_address',
  'emergency_email_address',
  'emergency_phone_number',
];
