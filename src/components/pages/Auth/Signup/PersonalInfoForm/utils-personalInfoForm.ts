import { capCharRemoveUnderscore, onlyAlphabet } from '~utils';

export const optional = ['middleName'];

export const titles = ['mr', 'mrs', 'master', 'miss'];

export const personalInfoFieldValidation = (
  key: string,
  value: string | string[]
): { [key: string]: string } => {
  const error: { [key: string]: string } = { [key]: '' };

  //   if (!checkAllFieldsAreFilled) {
  //     const txt = 'Some fields are empty';
  //     popup('error', txt);
  //     throw Error(txt);
  //   }

  //   if (!validateEmail(fields.email)) {
  //     error.email = 'Email Format Invalid';
  //     throw Error('Email Format Invalid');
  //   }

  //   if (fields.password) {
  //     if (fields.password !== fields.retypePassword) {
  //       throw Error('Password mismatched');
  //     }
  //     if (validatePassword(fields.password) !== 'true') {
  //       throw Error(`password must contain ${validatePassword(fields.password)}`);
  //     }
  //   }

  //   if (!validatePhoneNumber(Number(fields.phoneNo))) {
  //     throw Error('Phone number is invalid');
  //   }

  switch (key) {
    case 'title':
      if (!value) error[key] = `${capCharRemoveUnderscore(key)} is required`;
      break;
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
    case 'country':
    case 'state_of_origin':
    case 'date_of_birth':
      if (!value.length) {
        error[key] = `${capCharRemoveUnderscore(key)} is required`;
      } else {
        const lessThan16 =
          new Date().getFullYear() - new Date(String(value)).getFullYear() < 16;

        if (lessThan16) {
          error[key] = `${capCharRemoveUnderscore(
            key
          )} Should be over 16 years`;
        }
      }
      break;

    default:
      break;
  }
  return error;

  // if (!onlyAlphabet(fields.firstName) || !onlyAlphabet(fields.lastName)) {
  //   error.firstName = 'Name should contain only letters';
  // }

  // if (fields.middleName && !onlyAlphabet(fields.middleName)) {
  //   error.middleName = 'Name should contain only letters';
  // }

  // if (!onlyAlphabet(fields.lastName)) {
  //   error.lastName = 'Name should contain only letters';
  // }

  // if (fields.firstName.length < 3) {
  //   error.firstName = 'Name should contain only letters';
  // }

  // if (fields.middleName && fields.middleName.length < 3) {
  //   error.middleName = 'Name should contain only letters';
  // }

  // if (fields.lastName.length < 3) {
  //   error.lastName = 'Name should contain only letters';
  // }

  // if (['male', 'female'].includes(fields.gender)) {
  //   error.gender = 'Gender should be male or female';
  // }

  // if (Object.keys(error).length) popup('error', 'Some Fields are invalid');

  // return error;

  //   if (!fields.date_of_birth) {
  //     error.date_of_birth = 'Invalid date of birth';
  //   }

  //   if (fields.firstName.length < 3 || fields.lastName.length < 3) {
  //     throw Error('Name too short');
  //   }

  //   if (fields.firstName.length > 25 || fields.lastName.length > 25) {
  //     throw Error('Name too long');
  //   }

  //   if (!fields.state) {
  //     throw Error('Invalid state provided');
  //   }
};

export const personalInfoInitialState = {
  first_name: '',
  middle_name: '',
  last_name: '',
  gender: '',
  nationality: '',
  state_of_origin: '',
  date_of_birth: '',
};

export const personalInfoOptionalFields = ['middle_name'];
