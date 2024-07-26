import { useEffect, useState } from 'react';
import useGetCountriesAndState from '~components/reusables/hooks/useGetCountriesAndState';
import { useSignupContext } from '../u-signup';
import useBulkState from '~components/reusables/hooks/useBulkState';
import {
  personalInfoFieldValidation,
  personalInfoInitialState,
  personalInfoOptionalFields,
} from './u-personalInfoForm';

const usePersonalInfoForm = () => {
  const {
    countries,
    isLoading: fetchingCountry,
    states,
    setCountry,
  } = useGetCountriesAndState();

  const [state, setState] = useBulkState<{
    [key: string]: string | Date;
  }>({
    ...personalInfoInitialState,
  });

  const { step, setStep, totalSteps } = useSignupContext();
  const [error, setError] = useState<{ [key: string]: string }>({
    ...personalInfoInitialState,
  });

  useEffect(() => setCountry(String(state.nationality)), [state.nationality]);

  const validateInput = (key: string, value: string | string[]) => {
    setError((prev) => ({
      ...prev,
      ...personalInfoFieldValidation(key, value),
    }));
  };

  const disableNextBtn =
    step === totalSteps ||
    !!Object.values(error).filter(Boolean).length ||
    !!Object.entries(state).filter(
      ([key, val]) => !personalInfoOptionalFields.includes(key) && !val
    ).length;

  return {
    countries,
    fetchingCountry,
    states,
    setState,
    setStep,
    validateInput,
    disableNextBtn,
    state,
    error,
    step,
  };
};

export default usePersonalInfoForm;
