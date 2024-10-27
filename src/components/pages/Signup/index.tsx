import { memo, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SignupContext } from './u-signup';

import logo from '~assets/images/logo.png';
import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import useBulkState from '~components/reusables/hooks/useBulkState';
import Api from '~api';
import useStore from '~src/store';
import CompleteSignup from './CompleteSignup';

const steps = {
  1: 'Personal Info',
  2: 'Contact Info',
  3: 'Create Password',
};

const totalSteps = Object.keys(steps).length;

const { api } = new Api();

const Signup = () => {
  const [step, setStep] = useState(1);
  const [signupDetails, setSignupDetails] = useBulkState({});
  const { mutateAsync } = useMutation({
    mutationFn: () => api.signup(signupDetails),
    onSuccess: (data) => {
      console.log(data);
      useStore.getState().login(data.data.access_token);
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
    <SignupContext.Provider value={values}>
      <section className="flex _full flex-wrap fixed inset-0 xlg:flex-nowrap overflow-auto xlg:overflow-hidden gap-6">
        <div className="w-full xlg:w-1/2 py-8 overflow-auto">
          <div className="mx-auto w-full max-w-sm xlg:w-96">
            <div className="tx">
              <img height={40} width={40} src={logo} alt="logo" />
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
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 mt-6"
              >
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
          </div>
        </div>
        <div className="hidden w-1/2 xlg:block">
          <img
            className="h-full w-full object-contain"
            src="https://res.cloudinary.com/ibraheemsulay/image/upload/v1703696961/wepik-export-202312262013541Fhh_itg0vo.png"
            alt="Sign up"
          />
        </div>
      </section>
    </SignupContext.Provider>
  );
};

export default memo(Signup);
