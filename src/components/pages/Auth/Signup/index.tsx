import { memo, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { SignupContext } from './u-signup';

import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import useBulkState from '~components/reusables/hooks/useBulkState';
import Api from '~api';
import CompleteSignup from './CompleteSignup';
import userStore from '~src/store/user';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';
import Auth from '..';

const steps = {
  1: 'Personal Info',
  2: 'Contact Info',
  3: 'Create Password',
};

const totalSteps = Object.keys(steps).length;

const { api } = new Api();

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [signupDetails, setSignupDetails] = useBulkState(
    {} as TUserSignupPayload
  );
  const { mutateAsync } = useMutation({
    mutationFn: () => api.signup(signupDetails),
    onSuccess: (data) => {
      console.log('here', data);
      userStore.getState().update({
        email: signupDetails.email,
      });

      navigate('/auth/verify-account');
    },
  });

  const values = useMemo(
    () => ({
      step,
      setStep,
      totalSteps,
      signupDetails,
      setSignupDetails,
    }),
    [step]
  );

  return (
    <Auth>
      <SignupContext.Provider value={values}>
        <div className="tx">
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a Skoolizy Account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Be a part of 100+ Schools already on Skoolizy. Want to know more
            about us?{' '}
            <a
              href="https://goal.com"
              className="font-semibold text-purple.dark hover:text-purple"
            >
              Learn more
            </a>
          </p>
        </div>

        <div className="mt-6">
          <span className="text-gray-400 text-sm">Step {step}</span>
          <h6 className="text-xl">{steps[step as keyof typeof steps]}</h6>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mt-6">
            {
              {
                1: <PersonalInfoForm />,
                2: <ContactInfoForm />,
                3: <CompleteSignup signupFn={mutateAsync} />,
              }[step]
            }
          </form>

          {/* <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-gray-500">
                <a
                  href="https://goal.com"
                  className="flex w-full items-center justify-center gap-3 rounded-md  px-3 py-1.5  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[https://goal.com1D9BF0]"
                >
                  <span className="text-sm font-semibold leading-6">
                    GitHub
                  </span>
                </a>
              </div>
            </div> */}
        </div>
      </SignupContext.Provider>
    </Auth>
  );
};

export default memo(Signup);
