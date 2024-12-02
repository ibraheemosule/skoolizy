import { memo, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { SignupContext } from './utils-signup';

import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import useBulkState from '~components/reusables/hooks/useBulkState';
import Api from '~api';
import CompleteSignup from './CompleteSignup';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';
import SignupOptions from './SignupOptions';
import Auth from '..';
import authStore from '~src/store/auth';
import userStore from '~src/store/user';

const steps = {
  1: 'Choose an account',
  2: 'Personal Info',
  3: 'Contact Info',
  4: 'Create Password',
};

const totalSteps = Object.keys(steps).length;

const { api } = new Api();

const Signup = () => {
  const [step, setStep] = useState(1);
  const [signupDetails, setSignupDetails] = useBulkState(
    {} as TUserSignupPayload
  );

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: () => api.signup(signupDetails),
    onSuccess: (data) => {
      userStore.getState().update({
        verified: data.data.verified,
        tag: data.data.tag,
        email: data.data.email,
      });
      authStore.getState().login(data.data);
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
          <p className="mt-2 leading-6 text-gray-500">
            Be a part of 100+ Schools already on Skoolizy. Already have an
            account?{' '}
            <Link
              to="/auth/login"
              className="font-semibold text-purple.dark hover:text-purple"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex flex-wrap justify-between">
            <span className="text-gray-400 text-sm">Step {step}</span>
            {step > 1 ? (
              <button
                onClick={() => {
                  setSignupDetails({});
                  setStep(1);
                }}
                className="text-purple.dark text-sm font-semibold"
              >
                Select Account
              </button>
            ) : (
              <h6 className="text-xl w-full mt-y">Select an account</h6>
            )}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mt-6">
            {
              {
                1: <SignupOptions />,
                2: <PersonalInfoForm />,
                3: <ContactInfoForm />,
                4: (
                  <CompleteSignup
                    signupFn={mutateAsync}
                    loading={isPending || isSuccess}
                  />
                ),
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
