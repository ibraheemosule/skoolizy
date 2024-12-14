import { capCharRemoveUnderscore, onlyAlphabet } from '~utils';

export const optional = ['middleName'];

export const titles = ['mr', 'mrs', 'master', 'miss'];

export const personalInfoFieldValidation = (
  infoKey: string,
  value: string | string[]
): { [key: string]: string } => {
  const key = capCharRemoveUnderscore(infoKey);
  const error: { [key: string]: string } = { [infoKey]: '' };

  switch (infoKey) {
    case 'title':
      if (!value) error[infoKey] = `${key} is required`;
      break;
    case 'first_name':
    case 'last_name':
    case 'middle_name':
      if (infoKey === 'middle_name' && !value) break;
      if (!value) error[infoKey] = `${key} is required`;
      else if (!onlyAlphabet(String(value))) {
        error[infoKey] = `${capCharRemoveUnderscore(
          key
        )} should contain only letters`;
      } else if (value.length < 3) {
        error[infoKey] = `${key} is too short`;
      } else if (value.length > 25) {
        error[infoKey] = `${key} is too long`;
      }
      break;

    case 'gender':
    case 'country':
    case 'state_of_origin':
    case 'date_of_birth':
      if (!value.length) {
        error[infoKey] = `${key} is required`;
      } else {
        const lessThan16 =
          new Date().getFullYear() - new Date(String(value)).getFullYear() < 16;

        if (lessThan16) {
          error[infoKey] = `${key} should be over 16 years`;
        }
      }
      break;

    case 'picture':
      if (!value) error[infoKey] = `${key} is required`;
      if (!(value instanceof Blob)) {
        error[infoKey] = `Invalid ${key} provided`;
      }
      break;

    default:
      break;
  }
  return error;
};

export const personalInfoInitialState = {
  first_name: '',
  middle_name: '',
  last_name: '',
  gender: '',
  nationality: '',
  state_of_origin: '',
  date_of_birth: '',
  picture: '',
};

export const personalInfoOptionalFields = ['middle_name'];
