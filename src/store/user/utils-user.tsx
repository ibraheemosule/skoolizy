import { decrypt, encrypt } from '~utils/encryption';

const secureStorage = {
  ...(window && window.localStorage),
  getItem: (name: string): string | null => {
    const data = localStorage.getItem(name);
    if (!data) return null;
    try {
      return decrypt<string>(data);
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    const encryptedData = encrypt(value);
    localStorage.setItem(name, encryptedData);
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};
export default secureStorage;
