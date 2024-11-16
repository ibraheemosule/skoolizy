import { memo, FC } from 'react';
import TextField from '~components/reusables/CustomField/TextField';
import useCreateNewPassword from './useCreateNewPassword';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import {
  createNewPasswordInputFieldValidation,
  TCreateNewPasswordProps,
} from './utils-createNewPassword';
import Modal from '~components/reusables/Modal';

const CreateNewPassword: FC<TCreateNewPasswordProps> = ({ token }) => {
  const {
    setState,
    disableSubmitBtn,
    state,
    error,
    setError,
    createNewPassword,
    isPending,
    resetSuccessful,
    routeToLogin,
  } = useCreateNewPassword(token);

  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create New Password
        </h2>
        <div className="mt-4 leading-6">
          <strong className="text-brown.dark">Password Tip:</strong>
          <ul className="list-disc pl-4">
            <li>Use a strong password</li>
            <li>
              Don&apos;t use a password that you have used on other websites
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            id="paassword"
            error={error.password}
            value={String(state.password)}
            onChange={(e) => setState({ password: e.target.value })}
            onBlur={() => {
              setError((prev) => ({
                ...(state.password && state.retypePassword
                  ? prev
                  : { retypePassword: '' }),
                ...createNewPasswordInputFieldValidation(
                  'password',
                  String(state.password)
                ),
              }));
            }}
            placeholder="Input your password"
          />
        </div>

        <div>
          <label htmlFor="retype-password">Retype Password</label>
          <div className="mb-8">
            <TextField
              type="password"
              id="retype-password"
              error={error.retypePassword}
              value={String(state.retypePassword)}
              onChange={(e) => setState({ retypePassword: e.target.value })}
              onBlur={() => {
                setError((prev) => ({
                  ...prev,
                  retypePassword:
                    state.retypePassword === state.password
                      ? ''
                      : 'Password does not match',
                }));
              }}
              placeholder="Retype your password"
            />
          </div>
        </div>
        <ActionBtn
          loading={isPending}
          onClick={async () => createNewPassword()}
          disabled={disableSubmitBtn}
        >
          Create new password
        </ActionBtn>
      </div>
      {resetSuccessful && (
        <Modal
          close={routeToLogin}
          title="Password reset successful"
          size="sm"
          content={
            <p className="my-8">
              You have successfully reset your password. You can now sign in
              with your new password.
            </p>
          }
          action={routeToLogin}
          actionText="Proceed to Login"
        />
      )}
    </>
  );
};

export default memo(CreateNewPassword);
