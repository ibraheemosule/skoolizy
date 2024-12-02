import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Auth from '..';
import TextField from '~components/reusables/CustomField/TextField';
import useLogin from '~components/pages/Auth/Login/hooks-login/useLogin';
import LoginOptions from './LoginOptions';
import { onlyNumericInput } from '~utils/format';

const Login = () => {
  const {
    tag,
    password,
    isGuardian,
    rememberMe,
    setRememberMe,
    setPassword,
    setTag,
    account,
    setAccount,
    loginFn,
    isPending,
    isSuccess,
  } = useLogin();

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
          <div className="mb-2 flex flex-wrap justify-between">
            <span className="text-gray-400 text-sm">
              Step {account ? 2 : 1}
            </span>
            {account ? (
              <button
                onClick={() => {
                  setAccount('');
                  setTag('');
                  setPassword('');
                }}
                className="text-purple.dark text-sm font-semibold"
              >
                Select Account
              </button>
            ) : (
              <h6 className="text-xl w-full mt-y">Select an account</h6>
            )}
          </div>
          {account ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium leading-6 text-brown.dark"
                >
                  {isGuardian ? 'Phone Number' : 'Tag (e.g staff-123)'}
                </label>
                <div className="mt-1">
                  <TextField
                    value={tag}
                    onChange={(e) =>
                      setTag(
                        isGuardian
                          ? onlyNumericInput(e.target.value)
                          : e.target.value
                      )
                    }
                    type="text"
                    id="tag"
                    placeholder={`Input your ${
                      isGuardian ? 'Phone Number' : 'tag'
                    }`}
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
                    className="h-4 w-4 rounded cursor-pointer "
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
                onClick={async () => loginFn()}
                disabled={!tag || !password || isPending || isSuccess}
                loading={isPending || isSuccess}
              >
                Sign in
              </ActionBtn>
            </form>
          ) : (
            <LoginOptions setAccount={setAccount} />
          )}
        </div>
      </>
    </Auth>
  );
};

export default memo(Login);
