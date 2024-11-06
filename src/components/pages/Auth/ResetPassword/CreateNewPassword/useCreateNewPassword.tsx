import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '~api';
import useBanner from '~components/reusables/hooks/useBanner';
import { TApiError } from '~shared-ts-types/t-api';
import useBulkState from '~components/reusables/hooks/useBulkState';

const { api } = new Api();

const useCreateNewPassword = (token: string) => {
  const navigate = useNavigate();
  const [resetSuccessful, setResetSuccessful] = useState(false);
  const { banner } = useBanner();
  const [state, setState] = useBulkState<{
    [key: string]: string;
  }>({
    password: '',
    retypePassword: '',
  });
  const [error, setError] = useState<{ [key: string]: string | string[] }>(
    state
  );

  const { mutateAsync: createNewPassword, isPending } = useMutation({
    mutationFn: () =>
      api.createNewPassword({ token, new_password: state.password }),

    onSuccess: () => {
      banner({
        type: 'success',
        text: 'Password reset successful',
      });
      setResetSuccessful(true);
    },

    onError: (err: TApiError) => {
      let error = err.response?.data?.message;
      const expired = error.toLowerCase().includes('expired');

      if (expired) {
        error += '. Please request for another password reset link!';
      }

      banner({
        text: error,
        type: 'error',
        ...(expired && {
          btnText: 'Request Again',
          action: () => navigate('/auth/reset-password'),
        }),
      });
    },
  });

  const disableSubmitBtn =
    !state.password ||
    !state.retypePassword ||
    !!error.password?.length ||
    !!error?.retypePassword ||
    resetSuccessful;

  const routeToLogin = () => {
    navigate('/auth/login');
  };

  return {
    setState,
    disableSubmitBtn,
    state,
    error,
    setError,
    isPending,
    createNewPassword,
    resetSuccessful,
    routeToLogin,
  };
};

export default useCreateNewPassword;
