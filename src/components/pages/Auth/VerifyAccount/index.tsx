import { memo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Api from '~api';
import userStore from '~src/store/user';
import authStore from '~src/store/auth';
import TextField from '~components/reusables/CustomField/TextField';
import SkeletonLoader from '~components/reusables/SkeletonLoader';
import { onlyNumericInput } from '~utils/format';
import Auth from '..';

const { api } = new Api();

const VerifyAccount = () => {
  const navigate = useNavigate();
  const { email } = userStore.getState();
  const [otp, setOtp] = useState('');
  const {
    refetch: resendOtp,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['verif-account'],
    queryFn: () => api.sendOtp({ email }),
  });

  const { mutateAsync: verifyAccount, isPending } = useMutation({
    mutationFn: () => api.confirmSignup({ email, otp }),
    onSuccess: (data) => {
      authStore.getState().update({ token: data.data.access_token });
      navigate('/dashboard');
    },
  });

  return (
    <Auth>
      {isLoading ? (
        <div className="mt-8">
          <SkeletonLoader type="text" />
        </div>
      ) : (
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
              <form
                action="https://goal.com"
                method="POST"
                className="space-y-4"
              >
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
                    loading={isFetching}
                    onClick={() => resendOtp()}
                    className="font-semibold mx-auto text-purple.dark hover:text-purple"
                  >
                    Resend Code
                  </ActionBtn>
                </div>

                <ActionBtn loading={isPending} onClick={() => verifyAccount()}>
                  Verify Account
                </ActionBtn>
              </form>
            </div>
          </div>
        </div>
      )}
    </Auth>
  );
};

export default memo(VerifyAccount);