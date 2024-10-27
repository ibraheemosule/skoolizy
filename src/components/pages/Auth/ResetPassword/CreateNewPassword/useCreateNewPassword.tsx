import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '~api';

import useBulkState from '~components/reusables/hooks/useBulkState';

const { api } = new Api();

const useCreateNewPassword = (token: string) => {
  const navigate = useNavigate();
  const [state, setState] = useBulkState<{
    [key: string]: string;
  }>({
    password: '',
    retypePassword: '',
  });

  const { mutateAsync: createNewPassword, isPending } = useMutation({
    mutationFn: () =>
      api.createNewPassword({ token, new_password: state.password }),
    onSuccess: () => navigate('/auth/login'),
  });

  const [error, setError] = useState<{ [key: string]: string | string[] }>(
    state
  );

  const disableSubmitBtn =
    !state.password ||
    !state.retypePassword ||
    !!error.password?.length ||
    !!error?.retypePassword;

  return {
    setState,
    disableSubmitBtn,
    state,
    error,
    setError,
    isPending,
    createNewPassword,
  };
};

export default useCreateNewPassword;
