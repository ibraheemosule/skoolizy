import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const SignupContext = createContext<{
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
} | null>(null);

export const useSignupContext = () => {
  const context = useContext(SignupContext);

  if (!context) {
    throw Error('Context should be used within the signup component');
  }
  return context;
};
