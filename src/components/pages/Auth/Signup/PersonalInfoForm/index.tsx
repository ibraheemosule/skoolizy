import { memo } from 'react';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import SelectField from '~components/reusables/CustomField/SelectField';
import DateTimeField from '~components/reusables/CustomField/DateTimeField';
import TextField from '~components/reusables/CustomField/TextField';

import usePersonalInfoForm from './usePersonalInfoForm';
import { titles } from './utils-personalInfoForm';

const PersonalInfoForm = () => {
  const {
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
  } = usePersonalInfoForm();

  return (
    <>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Title
        </label>
        <div>
          <SelectField
            list={titles}
            value={String(state.title)}
            onSelect={(arg: string) => setState({ title: arg })}
            onBlur={() => validateInput('title', String(state.title))}
            error={error.gender}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          First Name
        </label>
        <div>
          <TextField
            error={error.first_name}
            value={String(state.first_name)}
            onChange={(e) => setState({ first_name: e.target.value })}
            onBlur={() => validateInput('first_name', String(state.first_name))}
            placeholder="Enter your first name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="middle-name"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Middle Name
        </label>
        <div>
          <TextField
            error={error.middle_name}
            onBlur={() =>
              state.middle_name &&
              validateInput('middle_name', String(state.middle_name))
            }
            value={String(state.middle_name)}
            onChange={(e) => setState({ middle_name: e.target.value })}
            placeholder="Enter your middle name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Last Name
        </label>
        <div>
          <TextField
            error={error.last_name}
            onBlur={() => validateInput('last_name', String(state.last_name))}
            value={String(state.last_name)}
            onChange={(e) => setState({ last_name: e.target.value })}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Gender
        </label>
        <div>
          <SelectField
            list={['male', 'female']}
            value={String(state.gender)}
            onSelect={(arg: string) => setState({ gender: arg })}
            onBlur={() => validateInput('gender', String(state.gender))}
            error={error.gender}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="date-of-birth"
          className="block text-sm font-medium leading-6 text-brown.dark"
        >
          Date of Birth
        </label>
        <div>
          <DateTimeField
            error={error.date_of_birth}
            onChange={(arg: Date | null) =>
              arg && setState({ date_of_birth: arg })
            }
            value={state.date_of_birth}
            onBlur={() =>
              validateInput('date_of_birth', String(state.date_of_birth))
            }
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-brown.dark">
          Country
        </label>
        <div>
          <SelectField
            list={countries}
            value={String(state.country)}
            onSelect={(arg: string) => setState({ country: arg })}
            onBlur={() => validateInput('country', String(state.country))}
            error={error.country}
            loading={fetchingCountry}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-brown.dark">
          State of Origin
        </label>
        <div>
          <SelectField
            list={countryStates}
            value={String(state.state_of_origin)}
            onSelect={(arg: string) => setState({ state_of_origin: arg })}
            onBlur={() =>
              validateInput('state_of_origin', String(state.state_of_origin))
            }
            error={error.state_of_origin}
            disabled={!state.country}
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

export default memo(PersonalInfoForm);
