import { memo } from 'react';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import TextField from '~components/reusables/CustomField/TextField';
import useContactInfoForm from './useContactFormInfo';
import { onlyNumericInput } from '~utils/format';

const ContactInfoForm = () => {
  const {
    setState,
    setStep,
    validateInput,
    disableNextBtn,
    state,
    error,
    step,
    proceed,
  } = useContactInfoForm();

  return (
    <>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Email
        </label>
        <div>
          <TextField
            type="email"
            error={error.email}
            value={String(state.email)}
            onChange={(e) => setState({ email: e.target.value })}
            onBlur={() => validateInput('email', String(state.email))}
            placeholder="Enter your Email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Phone Number
        </label>
        <div>
          <TextField
            type="tel"
            id="phone-number"
            error={error.phone_number}
            onBlur={() =>
              state.phone_number &&
              validateInput('phone_number', String(state.phone_number))
            }
            value={String(state.phone_number)}
            onChange={(e) =>
              setState({ phone_number: onlyNumericInput(e.target.value) })
            }
            placeholder="Enter your Phone Number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="home-address"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Home Address
        </label>
        <div>
          <TextField
            id="home-address"
            error={error.home_address}
            onBlur={() =>
              validateInput('home_address', String(state.home_address))
            }
            value={String(state.home_address)}
            onChange={(e) => setState({ home_address: e.target.value })}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <PrevNextBtn
        disablePrev={step === 1}
        disableNext={disableNextBtn}
        prevAction={() => setStep((prev) => prev - 1)}
        nextAction={proceed}
      />
    </>
  );
};

export default memo(ContactInfoForm);
