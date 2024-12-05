import { decrypt, encrypt } from '~utils/encryption';

const secretKey = import.meta.env.VITE_PERSIST_KEY;

const secureStorage = {
  getItem: (name: string): string | null => {
    const data = localStorage.getItem(name);
    if (!data) return null;
    try {
      const decrypted = decrypt(data, secretKey);
      return JSON.parse(decrypted) || null;
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    const encrypted = encrypt(JSON.stringify(value), secretKey);
    localStorage.setItem(name, encrypted);
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};
export default secureStorage;
