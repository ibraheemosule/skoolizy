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
  const { step, setStep, totalSteps, signupDetails, setSignupDetails } =
    useSignupContext();
  const {
    countries,
    isLoading: fetchingCountry,
    states: countryStates,
    setCountry,
  } = useGetCountriesAndState();

  const [state, setState] = useBulkState<{
    [key: string]: string | Date;
  }>({
    first_name: signupDetails.first_name || '',
    middle_name: signupDetails.middle_name || '',
    last_name: signupDetails.last_name || '',
    gender: signupDetails.gender || '',
    country: signupDetails.country || '',
    state_of_origin: signupDetails.state_of_origin || '',
    date_of_birth: signupDetails.date_of_birth || '',
  });

  const [error, setError] = useState<{ [key: string]: string }>({
    ...personalInfoInitialState,
  });

  useEffect(() => setCountry(String(state.country)), [state.country]);

  const validateInput = (key: string, value: string | string[]) => {
    setError((prev) => ({
      ...prev,
      ...personalInfoFieldValidation(key, value),
    }));
  };

  const proceed = () => {
    setSignupDetails(state);
    setStep(step + 1);
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
    countryStates,
    setState,
    setStep,
    validateInput,
    disableNextBtn,
    state,
    error,
    step,
    proceed,
  };
};

export default usePersonalInfoForm;
