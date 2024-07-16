import { memo } from 'react';
import CustomField from '~components/reusables/CustomField';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import { useSignupContext } from '../u-signup';

const ContactInfoForm = () => {
  const { step, setStep, totalSteps } = useSignupContext();
  const [email, setEmail] = useCustomField('');
  const [password, setPassword] = useCustomField('');

  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={email}
            onChange={setEmail}
            type="email"
            id="email"
            placeholder="Enter your email"
            icon={null}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone Number
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={email}
            onChange={setEmail}
            type="tel"
            id="phone"
            pattern="[0-9]+"
            placeholder="Enter phone number"
            icon={null}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={password}
            onChange={setPassword}
            placeholder="Create a password"
            type="text"
            icon={null}
            id="email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Re-enter Password
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={password}
            onChange={setPassword}
            placeholder="Retype password"
            type="text"
            icon={null}
            id="email"
          />
        </div>
      </div>
      <PrevNextBtn
        disablePrev={step === 1}
        disableNext={step === totalSteps}
        prevAction={() => step > 1 && setStep(step - 1)}
        nextAction={() => step < totalSteps && setStep(step + 1)}
      />
    </>
  );
};

export default memo(ContactInfoForm);
