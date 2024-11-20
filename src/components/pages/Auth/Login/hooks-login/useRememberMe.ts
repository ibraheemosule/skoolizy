import { Dispatch, SetStateAction, useEffect } from 'react';
import { decryptInput, encryptInput } from '~utils/encryption';

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

const key = import.meta.env.VITE_CRYPTOJS_KEY;

function saveUser({ tag, password }: TUserCredentials) {
  const prevUser = localStorage.getItem('skoolizy-USER');

  if (prevUser) localStorage.clear();

  if (!tag || !password) return;
  localStorage.setItem(
    'skoolizy_user',
    JSON.stringify({
      tag,
      password: encryptInput(password, key),
    })
  );
}

function isUserSaved(): { tag: string; password: string } | null {
  const data = localStorage.getItem('skoolizy_user');
  return data ? JSON.parse(data) : null;
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

    if (user?.tag) {
      setTag(user.tag);
      setPassword(decryptInput(user.password, key));
    }
  }, []);
};

export default useRememberMe;
