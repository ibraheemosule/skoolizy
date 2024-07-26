import { memo, useMemo, useState } from 'react';
import { SignupContext } from './u-signup';

import logo from '~assets/images/logo.png';
import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import useBulkState from '~components/reusables/hooks/useBulkState';

const steps = {
  1: 'Personal Info',
  2: 'Contact Info',
};

const totalSteps = Object.keys(steps).length;

const Signup = () => {
  const [step, setStep] = useState(1);
  const [signupDetails, setSignupDetails] = useBulkState({});

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
                action="https://goal.com"
                method="POST"
                className="space-y-6 mt-6"
              >
                {
                  {
                    1: <PersonalInfoForm />,
                    2: <ContactInfoForm />,
                  }[step]
                }

                {/* <div className="flex flex-wrap justify-between">
                  <ActionBtn
                    disabled={step === 1}
                    onClick={() => step > 1 && setStep(step - 1)}
                    className="flex gap-1
                    px-2 py-1 disabled:bg-gray-200 disabled:hover:opacity-100
                     items-center text-white text-sm font-normal bg-purple.dark
                      rounded-lg hover:opacity-50"
                  >
                    <Icon name="caretLeftSolid" width={12} height={12} />
                    <span>Previous</span>
                  </ActionBtn>
                  <ActionBtn
                    disabled={step === totalSteps}
                    onClick={() => step < totalSteps && setStep(step + 1)}
                    className="flex gap-1 px-2 py-1 disabled:bg-gray-200 disabled:hover:opacity-100
                     items-center ml-auto text-white text-sm font-normal
                     bg-purple.dark rounded-lg hover:opacity-50"
                  >
                    <span>Next</span>
                    <Icon name="caretRightSolid" width={12} height={12} />
                  </ActionBtn>
                </div> */}

                {/* <div className="flex items-center justify-between mt-6 mb-3">
                 <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded
                    border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="https://goal.com"
                    className="font-semibold text-purple.dark hover:text-purple"
                  >
                    Forgot password?
                  </a>
                </div>
              </div> */}

                {/* <ActionBtn>Sign up</ActionBtn> */}
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
