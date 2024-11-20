import CryptoJS, { enc } from 'crypto-js';
import { Dispatch, SetStateAction, useEffect } from 'react';

type TUserCredentials = {
  tag?: string;
  password?: string;
};

type TRememberMeActions = {
  rememberMe: boolean;
  setTag: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};

type TRememberMeProps = TUserCredentials & TRememberMeActions;

const key = import.meta.env.VITE_ENCRYPT_KEY;

function saveUser({ tag, password }: TUserCredentials) {
  const prevUser = localStorage.getItem('skoolizy-USER');

  if (prevUser) localStorage.clear();

  if (!tag || !password) return;
  localStorage.setItem(
    'skoolizy-USER',
    JSON.stringify({
      tag,
      password: CryptoJS.AES.encrypt(password, key).toString(),
    })
  );
}

function isUserSaved(): { tag: string; password: string } {
  const data = localStorage.getItem('skoolizy-USER');
  return data !== null ? JSON.parse(data || '') : { tag: '', password: '' };
}

const useRememberMe = ({
  tag,
  password,
  rememberMe,
  setTag,
  setPassword,
}: TRememberMeProps) => {
  useEffect(() => {
    if (rememberMe) {
      saveUser({ tag, password });
    }
  }, [tag, password, rememberMe]);

  useEffect(() => {
    const user = isUserSaved();
    const pword = CryptoJS.AES.decrypt(user.password, key);

    if (user.tag) {
      setTag(user.tag);
      setPassword(pword.toString(enc.Utf8));
    }
  }, []);
};

export default useRememberMe;
