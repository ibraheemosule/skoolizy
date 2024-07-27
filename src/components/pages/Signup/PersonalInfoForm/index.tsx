import { memo } from 'react';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import SelectField from '~components/reusables/CustomField/SelectField';
import DateTimeField from '~components/reusables/CustomField/DateTimeField';
import TextField from '~components/reusables/CustomField/TextField';

import usePersonalInfoForm from './usePersonalInfoForm';

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
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          First Name
        </label>
        <div className="mt-2">
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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Middle Name
        </label>
        <div className="mt-2">
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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last Name
        </label>
        <div className="mt-2">
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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Gender
        </label>
        <div className="mt-2">
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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date of Birth
        </label>
        <div className="mt-2">
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
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nationality
        </label>
        <div className="mt-2">
          <SelectField
            list={countries}
            value={String(state.nationality)}
            onSelect={(arg: string) => setState({ nationality: arg })}
            onBlur={() =>
              validateInput('nationality', String(state.nationality))
            }
            error={error.nationality}
            loading={fetchingCountry}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          State of Origin
        </label>
        <div className="mt-2">
          <SelectField
            list={countryStates}
            value={String(state.state_of_origin)}
            onSelect={(arg: string) => setState({ state_of_origin: arg })}
            onBlur={() =>
              validateInput('state_of_origin', String(state.state_of_origin))
            }
            error={error.state_of_origin}
            disabled={!state.nationality}
          />
        </div>
      </div>
      <PrevNextBtn
        disablePrev={step === 1}
        disableNext={disableNextBtn}
        prevAction={() => setStep(step - 1)}
        nextAction={proceed}
      />
    </>
  );
};

export default memo(PersonalInfoForm);
