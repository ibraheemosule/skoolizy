import { validatePassword } from '~utils/validations';

export type TCompleteSignupProps = {
  signupFn: () => void;
};

export const completeSignupInputFieldValidation = (
  key: string,
  value: string
): { [key: string]: string | string[] } => {
  const error: { [key: string]: string | string[] } = {
    [key]: validatePassword(value),
  };

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

  return error;
};
