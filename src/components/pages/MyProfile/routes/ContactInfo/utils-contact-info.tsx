import userStore from '~src/store/userStore';

const { email, phoneNumber, homeAddress } = userStore.getState();

export const contact = {
  email_address: email,
  phone_number: phoneNumber,
  home_address: homeAddress,
  emergency_email_address: 'test@yop.com',
  emergency_phone_number: '08012345678',
};

export const contactAuthEdit = ['email_address', 'phone_number'];

export const canEdit = Object.keys(contact);
