import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Api from '~api';
import userStore from '~src/store/user';
import TextField from '~components/reusables/CustomField/TextField';
import { onlyNumericInput } from '~utils/format';
import Auth from '..';
import useBanner from '~components/reusables/hooks/useBanner';
import authStore from '~src/store/auth';

const { api } = new Api();

const VerifyAccount = () => {
  const { email, tag, update } = userStore.getState();
  const { logout } = authStore.getState();
  const { banner } = useBanner();
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const { mutateAsync: sendOtp, isPending: codeReqPending } = useMutation({
    mutationFn: () => api.sendOtp({ email }),
    onSuccess: (data) => {
      setCodeSent(true);
      const isPrevCodeStillValid = data.message.includes('still valid');
      banner({
        text: data.message,
        persist: false,
        type: isPrevCodeStillValid ? 'info' : 'success',
        timeout: 5,
      });
      if (isPrevCodeStillValid) return;

      update({ verified: true });
    },
  });

  const { mutateAsync: verifyAccount, isPending } = useMutation({
    mutationFn: () => api.verifyAccount({ code }),
    onSuccess: () => {
      userStore.getState().update({ verified: true });
    },
  });

  return (
    <Auth>
      <div>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verify Your Account
        </h2>
        <div className="mt-2 leading-6 text-gray-500">
          {codeSent ? (
            <p>
              A verification code has been sent to {email}. Submit the code in
              the input below. <strong>Code expires in 5 minutes</strong>
            </p>
          ) : (
            <>
              <strong>Your account with tag - {tag} is almost ready.</strong>
              <p className="mt-2">
                Please click the button below to request a verification code and
                complete your account verification process.
              </p>
            </>
          )}
        </div>

        <p className="mt-2 leading-6 text-gray-500">
          If you prefer to complete this step at later, you may{' '}
          <button className="text-purple.dark font-bold" onClick={logout}>
            log out
          </button>
        </p>

        <div className="mt-6">
          <div>
            <form action="https://goal.com" method="POST" className="space-y-4">
              {codeSent ? (
                <>
                  <div>
                    <TextField
                      error=""
                      onBlur={() => null}
                      value={code}
                      onChange={(e) =>
                        setCode(onlyNumericInput(e.target.value))
                      }
                      placeholder="Enter Code"
                    />
                  </div>

                  <div className="text-sm text-center leading-6">
                    <ActionBtn
                      loading={codeReqPending}
                      onClick={() => sendOtp()}
                      className="font-semibold text-base mx-auto text-purple.dark hover:text-purple"
                    >
                      Resend Code
                    </ActionBtn>
                  </div>
                  <ActionBtn
                    loading={isPending}
                    onClick={() => verifyAccount()}
                  >
                    Verify Account
                  </ActionBtn>
                </>
              ) : (
                <ActionBtn loading={codeReqPending} onClick={() => sendOtp()}>
                  Request for code
                </ActionBtn>
              )}
            </form>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default memo(VerifyAccount);
