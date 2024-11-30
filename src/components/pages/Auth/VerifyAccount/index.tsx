import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Api from '~api';
import userStore from '~src/store/user';
import TextField from '~components/reusables/CustomField/TextField';
import { onlyNumericInput } from '~utils/format';
import Auth from '..';
import useBanner from '~components/reusables/hooks/useBanner';

const { api } = new Api();

const VerifyAccount = () => {
  const { email, tag } = userStore.getState();
  const { banner } = useBanner();
  const [otp, setOtp] = useState('');
  const [optSent, setOtpSent] = useState(false);

  const { mutateAsync: sendOtp, isPending: codeReqPending } = useMutation({
    mutationFn: () => api.sendOtp({ email }),
    onSuccess: (data) => {
      setOtpSent(true);
      const isPrevCodeStillValid = data.message.includes('still valid');
      banner({
        text: data.message,
        persist: false,
        type: isPrevCodeStillValid ? 'info' : 'success',
        timeout: 5,
      });
    },
  });

  const { mutateAsync: verifyAccount, isPending } = useMutation({
    mutationFn: () => api.confirmSignup({ tag, otp }),
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
        <p className="mt-2 leading-6 text-gray-500">
          A verification code has been sent to {email}. Submit the code in the
          input below. <strong>Code expires in 2 minutes</strong>
        </p>

        <div className="mt-6">
          <div>
            <form action="https://goal.com" method="POST" className="space-y-4">
              <div>
                <TextField
                  error=""
                  onBlur={() => null}
                  value={otp}
                  onChange={(e) => setOtp(onlyNumericInput(e.target.value))}
                  placeholder="Enter Code"
                />
              </div>

              <div className="text-sm text-center leading-6">
                <ActionBtn
                  loading={codeReqPending}
                  onClick={() => sendOtp()}
                  className="font-semibold mx-auto text-purple.dark hover:text-purple"
                >
                  {optSent ? 'Resend' : 'Send'} Code
                </ActionBtn>
              </div>

              <ActionBtn loading={isPending} onClick={() => verifyAccount()}>
                Verify Account
              </ActionBtn>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default memo(VerifyAccount);
