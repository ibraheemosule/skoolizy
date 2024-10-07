import { phoneNumberFormats } from '~utils/format';

export const validateEmail = (email: string) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return 'minimum length of 8 characters';
  }
  if (password.length > 30) {
    return 'maximum length of 30 characters';
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    return 'uppercase letter';
  }
  if (!/(?=.*[a-z])/.test(password)) {
    return 'lowercase letter';
  }
  if (!/(?=.*\d)/.test(password)) {
    return 'number';
  }
  if (!/(?=.*[^A-Za-z0-9])/.test(password)) {
    return 'special character';
  }

  return 'true';
};

export const validatePhoneNumber = (num: number) => {
  const number = num.toString();

  if (number.startsWith('234')) {
    const invalid =
      number.length !== 13 || !phoneNumberFormats.includes(number.slice(3, 5));

    if (invalid) return false;

    return true;
  }

  if (!phoneNumberFormats.includes(number.slice(0, 2))) {
    return false;
  }

  if (number.length !== 10 || !Number.isInteger(Number(number))) {
    return false;
  }
  return true;
};

export const formatPhoneNumber = (num: number) => {
  let number = num.toString();
  if (number) {
    if (number.startsWith('234')) {
      number = `0${number.slice(3)}`;
    } else number = `0${number}`;
  }

  return number;
};
