import { useState } from 'react';
import { useSignupContext } from '../u-signup';
import useBulkState from '~components/reusables/hooks/useBulkState';

const useCompleteSignup = () => {
  const { setStep, signupDetails, setSignupDetails } = useSignupContext();

  const [state, setState] = useBulkState<{
    [key: string]: string;
  }>({
    password: (signupDetails.password as string) || '',
    retypePassword: '',
  });

  const [error, setError] = useState<{ [key: string]: string | string[] }>(
    state
  );

  const proceed = async () => {
    setSignupDetails({ password: state.password });
  };

  const disableSignupBtn =
    !state.password ||
    !state.retypePassword ||
    !!error.password?.length ||
    !!error?.retypePassword;

  return {
    setState,
    setStep,
    disableSignupBtn,
    state,
    error,
    setError,
    proceed,
  };
};

export default useCompleteSignup;
