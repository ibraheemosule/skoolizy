import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';

export const SignupContext = createContext<{
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  totalSteps: number;
  signupDetails: TUserSignupPayload;
  setSignupDetails: Dispatch<{
    [key: string]: string | undefined | Date | Blob;
  }>;
} | null>(null);

export const useSignupContext = () => {
  const context = useContext(SignupContext);

  if (!context) {
    throw Error('Context should be used within the signup component');
  }
  return context;
};
