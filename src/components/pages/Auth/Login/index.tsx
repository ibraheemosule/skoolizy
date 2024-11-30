import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Auth from '..';
import TextField from '~components/reusables/CustomField/TextField';
import Api from '~api';
import authStore from '~src/store/auth';
import useRememberMe from '~components/pages/Auth/Login/hooks-login/useRememberMe';

import userStore from '~src/store/user';

const { api } = new Api();

const Login = () => {
  const [tag, setTag] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useRememberMe({
    rememberMe,
    setRememberMe,
    tag,
    setTag,
    password,
    setPassword,
  });

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: () => api.signin({ tag, password }),
    onSuccess: (data) => {
      userStore.getState().update({
        verified: data.data.verified,
        tag: data.data.tag,
        email: data.data.email,
      });
      authStore.getState().login(data.data);
    },
  });

  return (
    <Auth>
      <>
        <div>
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 leading-6 text-gray-500">
            Don&apos;t have an account?{' '}
            <Link
              to="/auth/signup"
              className="font-semibold text-purple.dark hover:text-purple"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium leading-6 text-brown.dark"
                >
                  Tag (e.g staff-123)
                </label>
                <div className="mt-1">
                  <TextField
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    type="text"
                    id="tag"
                    placeholder="Input your tag"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-brown.dark"
                >
                  Password
                </label>
                <div className="mt-1">
                  <TextField
                    type="password"
                    id="paassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Input your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    aria-label="remember me option"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded cursor-pointer border-gray-300 bg-brown.dark text-brown.dark focus:ring-brown.dark"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block font-semibold leading-6 text-brown.dark"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/auth/reset-password"
                  className="font-semibold text-purple.dark hover:text-purple"
                >
                  Forgot password?
                </Link>
              </div>

              <ActionBtn
                onClick={async () => mutateAsync()}
                disabled={!tag || !password || isPending || isSuccess}
                loading={isPending || isSuccess}
              >
                Sign in
              </ActionBtn>
            </form>
          </div>
        </div>
      </>
    </Auth>
  );
};

export default memo(Login);
