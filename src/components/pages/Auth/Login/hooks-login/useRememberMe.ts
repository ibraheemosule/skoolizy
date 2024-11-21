import { Dispatch, SetStateAction, useEffect } from 'react';
import { decrypt, encrypt } from '~utils/encryption';

type TUserCredentials = {
  tag?: string;
  password?: string;
};

type TRememberMeActions = {
  rememberMe: boolean;
  setRememberMe: Dispatch<SetStateAction<boolean>>;
  setTag: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};

type TRememberMeProps = TUserCredentials & TRememberMeActions;

const key = import.meta.env.VITE_CRYPTOJS_KEY;

function saveUser({ tag, password }: TUserCredentials) {
  const prevUser = localStorage.getItem('skoolizy_user');

  if (prevUser) localStorage.clear();

  if (!tag || !password) return;
  localStorage.setItem(
    'skoolizy_user',
    JSON.stringify({
      tag,
      password: encrypt(password, key),
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
  setRememberMe,
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
      setPassword(decrypt(user.password, key));
      setRememberMe(true);
    }
  }, []);
};

export default useRememberMe;
