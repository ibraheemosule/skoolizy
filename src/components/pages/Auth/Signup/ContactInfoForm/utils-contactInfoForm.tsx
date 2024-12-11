import { capCharRemoveUnderscore, onlyAlphabet } from '~utils';

export const optional = ['middleName'];

export const contactInfoFieldValidation = (
  key: string,
  value: string | string[]
): { [key: string]: string } => {
  const error: { [key: string]: string } = { [key]: '' };

  switch (key) {
    case 'first_name':
    case 'last_name':
    case 'middle_name':
      if (key === 'middle_name' && !value) break;
      if (!value) error[key] = `${capCharRemoveUnderscore(key)} is required`;
      else if (!onlyAlphabet(String(value))) {
        error[key] = `${capCharRemoveUnderscore(
          key
        )} should contain only letters`;
      } else if (value.length < 3) {
        error[key] = `${capCharRemoveUnderscore(key)} is too short`;
      } else if (value.length > 25) {
        error[key] = `${capCharRemoveUnderscore(key)} is too long`;
      }
      break;

    case 'gender':
    case 'nationality':
    case 'state_of_origin':
    case 'date_of_birth':
      if (!value.length) {
        error[key] = `${capCharRemoveUnderscore(key)} is required`;
      }
      break;

    default:
      break;
  }
  return error;
};

export const contactInfoInitialState = {
  email: '',
  phone_number: '',
  home_address: '',
};

export const contactInfoOptionalFields = ['middle_name'];
