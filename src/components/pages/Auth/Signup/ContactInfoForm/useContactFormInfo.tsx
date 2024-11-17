import { useEffect, useState } from 'react';
import useGetCountriesAndState from '~components/reusables/hooks/useGetCountriesAndState';
import { useSignupContext } from '../utils-signup';
import useBulkState from '~components/reusables/hooks/useBulkState';
import {
  contactInfoFieldValidation,
  contactInfoInitialState,
  contactInfoOptionalFields,
} from './utils-contactInfoForm';

const useContactInfoForm = () => {
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
    email: signupDetails.email || '',
    phone_number: signupDetails.phone_number || '',
    home_address: signupDetails.home_address || '',
  });

  const [error, setError] = useState<{ [key: string]: string }>({
    ...contactInfoInitialState,
  });

  useEffect(() => setCountry(String(state.nationality)), [state.nationality]);

  const validateInput = (key: string, value: string | string[]) => {
    setError((prev) => ({
      ...prev,
      ...contactInfoFieldValidation(key, value),
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
      ([key, val]) => !contactInfoOptionalFields.includes(key) && !val
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

export default useContactInfoForm;
