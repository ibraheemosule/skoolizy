import CryptoJS, { enc } from 'crypto-js';
import { env } from '~utils/constants';

const key = env.VITE_CRYPTOJS_KEY;

export const encrypt = (data: unknown) => {
  const jsonData = JSON.stringify(data);

  return CryptoJS.AES.encrypt(jsonData, key).toString();
};

export const decrypt = <T>(str: string) => {
  const decryptedData = CryptoJS.AES.decrypt(str, key).toString(enc.Utf8);
  return JSON.parse(decryptedData) as T;
};
