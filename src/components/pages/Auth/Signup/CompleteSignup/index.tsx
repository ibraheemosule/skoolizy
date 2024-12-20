import { memo, FC } from 'react';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import TextField from '~components/reusables/CustomField/TextField';
import useCompleteSignup from './useCompleteSignup';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import {
  completeSignupInputFieldValidation,
  TCompleteSignupProps,
} from './utils-completeSignup';

const CompleteSignup: FC<TCompleteSignupProps> = ({ signupFn, loading }) => {
  const {
    setState,
    setStep,
    disableSignupBtn,
    state,
    error,
    setError,
    proceed,
  } = useCompleteSignup();

  return (
    <>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Password
        </label>
        <div>
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
                ...completeSignupInputFieldValidation(
                  'password',
                  String(state.password)
                ),
              }));
            }}
            placeholder="Input your password"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="retype-password"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Retype Password
        </label>
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

      <PrevNextBtn
        disablePrev={false}
        disableNext
        prevAction={() => setStep((prev) => prev - 1)}
      />
      <ActionBtn
        onClick={async () => {
          proceed();
          signupFn();
        }}
        loading={loading}
        disabled={disableSignupBtn || loading}
      >
        Sign Up
      </ActionBtn>
    </>
  );
};

export default memo(CompleteSignup);
