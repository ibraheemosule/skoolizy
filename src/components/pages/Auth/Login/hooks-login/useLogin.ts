import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { decrypt, encrypt, login } from '~utils';
import Api from '~api';
import { TUserCredentials } from '../types-login';

const { api } = new Api();

const key = import.meta.env.VITE_CRYPTOJS_KEY;

function saveUser({ tag, password, account }: TUserCredentials) {
  const prevUser = localStorage.getItem('skoolizy_user');

  if (prevUser) localStorage.clear();

  if (!tag || !password || !account) return;

  localStorage.setItem(
    'skoolizy_user',
    JSON.stringify({
      tag,
      password: encrypt(password, key),
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
      login(data.data);
    },
  });

  useEffect(() => {
    const user = isUserSaved();

    if (user?.tag) {
      setTag(user.tag);
      setPassword(decrypt(user.password, key));
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
