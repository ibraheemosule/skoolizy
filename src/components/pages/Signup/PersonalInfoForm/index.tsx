import { Dispatch, memo, useEffect, useReducer, useState } from 'react';
import CustomField from '~components/reusables/CustomField';
import useGetCountriesAndState from '~components/reusables/hooks/useGetCountriesAndState';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import { useSignupContext } from '../u-signup';
import { personalInfoFieldValidation } from './u-personalInfoForm';
import SelectField from '~components/reusables/CustomField/SelectField';
import DateTimeField from '~components/reusables/CustomField/DateTimeField';

const initialState = {
  first_name: '',
  middle_name: '',
  last_name: '',
  gender: '',
  nationality: '',
  state_of_origin: '',
  date_of_birth: '',
};

const optionalFields = ['middle_name'];

const useBulkState = <T,>(initialState: T): [T, Dispatch<Partial<T>>] => {
  const [state, setState] = useReducer(
    (state: T, newState: Partial<T>) => ({ ...state, ...newState }),
    initialState
  );

  return [state, setState];
};

const PersonalInfoForm = () => {
  const {
    countries,
    isLoading: fetchingCountry,
    states,
    setCountry,
  } = useGetCountriesAndState();

  const [state, setState] = useBulkState<{
    [key: string]: string | Date;
  }>({
    ...initialState,
  });

  const { step, setStep, totalSteps } = useSignupContext();
  const [error, setError] = useState<{ [key: string]: string }>({
    ...initialState,
  });

  useEffect(() => setCountry(String(state.nationality)), [state.nationality]);

  const validateInput = (key: string, value: string | string[]) => {
    setError((prev) => ({
      ...prev,
      ...personalInfoFieldValidation(key, value),
    }));
  };

  const disableNextBtn =
    step === totalSteps ||
    !!Object.values(error).filter(Boolean).length ||
    !!Object.entries(state).filter(
      ([key, val]) => !optionalFields.includes(key) && !val
    ).length;

  const proceed = () => {
    if (step < totalSteps && !Object.values(error).filter(Boolean).length) {
      setStep(step + 1);
    }
    console.log(
      'toutesting here',
      step,
      totalSteps,
      !!Object.values(error).filter((v) => !!v).length
    );
  };

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
          <CustomField
            error={error.first_name}
            onBlur={() => validateInput('first_name', String(state.first_name))}
            field="input"
            value={String(state.first_name)}
            onChange={(arg: string) => setState({ first_name: arg })}
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            icon={null}
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
          <CustomField
            error={error.middle_name}
            onBlur={() =>
              state.middle_name &&
              validateInput('middle_name', String(state.middle_name))
            }
            field="input"
            value={state.middle_name as string}
            onChange={(arg: string) => setState({ middle_name: arg })}
            type="text"
            id="middle-name"
            placeholder="Enter your middle name"
            icon={null}
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
          <CustomField
            error={error.last_name}
            onBlur={() => validateInput('last_name', String(state.last_name))}
            field="input"
            value={String(state.last_name)}
            onChange={(arg: string) => setState({ last_name: arg })}
            type="text"
            id="last-name"
            placeholder="Enter your last name"
            icon={null}
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
            list={states}
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
        prevAction={() => step > 1 && setStep(step - 1)}
        nextAction={() => {
          proceed();
        }}
      />
    </>
  );
};

export default memo(PersonalInfoForm);
