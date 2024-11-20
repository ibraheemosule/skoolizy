import CryptoJS, { enc } from 'crypto-js';

export const encryptInput = (str: string, key: string) =>
  CryptoJS.AES.encrypt(str, key).toString();

export const decryptInput = (str: string, key: string) =>
  CryptoJS.AES.decrypt(str, key).toString(enc.Utf8);
