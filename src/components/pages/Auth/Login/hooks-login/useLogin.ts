import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { decrypt, encrypt } from '~utils/encryption';

import Api from '~api';
import authStore from '~src/store/auth';

import userStore from '~src/store/user';

const { api } = new Api();

type TUserCredentials = {
  tag: string;
  password: string;
  account: string;
};

function saveUser({ tag, password, account }: TUserCredentials) {
  const prevUser = localStorage.getItem('skoolizy_user');

  if (prevUser) localStorage.clear();

  if (!tag || !password || !account) return;
  localStorage.setItem(
    'skoolizy_user',
    JSON.stringify({
      tag,
      password: encrypt(password),
      account,
    })
  );
}

function isUserSaved(): TUserCredentials | null {
  const data = localStorage.getItem('skoolizy_user');
  return data ? JSON.parse(data) : null;
}

const useLogin = () => {
  const [account, setAccount] = useState('');
  const [tag, setTag] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const isGuardian = account === 'guardians';

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: () =>
      api.signin({
        ...(isGuardian ? { phone_number: tag } : { tag }),
        password,
      }),
    onSuccess: (data) => {
      userStore.getState().update({
        verified: data.data.verified,
        tag: data.data.tag,
        email: data.data.email,
      });
      authStore.getState().login(data.data);
    },
  });

  useEffect(() => {
    const user = isUserSaved();

    if (user?.tag) {
      setTag(user.tag);
      setPassword(decrypt<string>(user.password));
      setAccount(user.account);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
      saveUser({ tag, password, account });
    } else {
      saveUser({ tag: '', password: '', account: '' });
    }
  }, [tag, password, rememberMe]);

  return {
    account,
    setAccount,
    rememberMe,
    setRememberMe,
    tag,
    setTag,
    password,
    setPassword,
    isGuardian,
    loginFn: mutateAsync,
    isPending,
    isSuccess,
  };
};

export default useLogin;
