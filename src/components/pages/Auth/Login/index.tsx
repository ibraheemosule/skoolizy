import { memo } from 'react';
import CustomField from '~components/reusables/CustomField';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Auth from '..';
import TextField from '~components/reusables/CustomField/TextField';

const Login = () => {
  const [email, setEmail] = useCustomField('');
  const [password, setPassword] = useCustomField('');
  return (
    <Auth>
      <div>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Don&apos;t have an account?{' '}
          <a
            href="https://goal.com"
            className="font-semibold text-purple.dark hover:text-purple"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className="mt-10">
        <div>
          <form action="https://goal.com" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <CustomField
                  field="input"
                  value={email}
                  onChange={setEmail}
                  type="email"
                  id="email"
                  icon={null}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
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
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="https://goal.com"
                  className="font-semibold text-purple.dark hover:text-purple"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <ActionBtn>Sign in</ActionBtn>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default memo(Login);
