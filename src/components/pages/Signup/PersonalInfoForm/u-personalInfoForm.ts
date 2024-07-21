import { onlyAlphabet } from '~utils/format';
import popup from '~utils/popup';

export const optional = ['middleName'];
export const required = [
  'firstName',
  'lastName',
  'gender',
  'date_of_birth',
  'nationality',
  'state_of_origin',
];

export const personalInfoValidation = (fields: { [key: string]: string }) => {
  const error: { [key: string]: string } = {};

  Object.keys(fields).forEach((field) => {
    if (optional.includes(field)) return;
    if (!fields[field]?.length) error[field] = `${field} is required`;
  });

  if (Object.keys(error).length) popup('error', 'Some Fields are invalid');

  return error;
};

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
    case 'firstName':
    case 'lastName':
    case 'middleName':
      if (key === 'middleName' && !value) break;
      if (!value) error[key] = `${key.split('N').join(' n')} is required`;
      else if (!onlyAlphabet(String(value))) {
        error[key] = 'Name should contain only letters';
      } else if (value.length < 3) {
        error[key] = `${key.split('N').join(' n')} is too short`;
      } else if (value.length > 25) {
        error[key] = `${key.split('N').join(' n')} is too long`;
      }
      break;

    case 'gender':
      if (!value.length) {
        error.gender = 'Gender is required';
      } else if (!['male', 'female'].includes(String(value))) {
        error.gender = 'Gender should be male or female';
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

export const test = {};
