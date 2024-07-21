import { memo, useEffect, useState } from 'react';
import CustomField from '~components/reusables/CustomField';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import useGetCountriesAndState from '~components/reusables/hooks/useGetCountriesAndState';
import PrevNextBtn from '~components/reusables/PrevNextBtn';
import { useSignupContext } from '../u-signup';
import {
  personalInfoValidation,
  personalInfoFieldValidation,
} from './u-personalInfoForm';
import SelectField from '~components/reusables/CustomField/SelectField';

const PersonalInfoForm = () => {
  const { step, setStep, totalSteps } = useSignupContext();
  const [error, setError] = useState<{ [key: string]: string }>({});
  // const [firstName, setFirstName] = useCustomField('');
  const [middleName, setMiddleName] = useCustomField('');
  const [lastName, setLastName] = useCustomField('');
  // const [gender, setGender, list, filterFn] = useCustomField(
  //   [],
  //   ['male', 'female', 'telling']
  // );
  const [gender, setGender] = useState<string>('');
  const [nationality, setNationality, countryList, filterCountryFn] =
    useCustomField('', []);
  const [stateOfOrigin, setStateOfOrigin, stateList, filterStateFn] =
    useCustomField('', []);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [firstName, setFirstName] = useState('');

  const {
    countries,
    isLoading: fetchingCountry,
    states,
    setCountry,
  } = useGetCountriesAndState();

  useEffect(() => {
    filterCountryFn(countries);
  }, [countries.length]);

  useEffect(() => {
    filterStateFn(states);
  }, [states.length]);

  useEffect(() => setCountry(nationality), [nationality]);

  // useEffect(() => {
  //   const err = personalInfoValidation({
  //     firstName,
  //     middleName,
  //     lastName,
  //     gender,
  //   });
  // }, [
  //   firstName,
  //   middleName,
  //   lastName,
  //   gender,
  //   dateOfBirth,
  //   nationality,
  //   stateOfOrigin,
  // ]);

  const validateInput = (key: string, value: string | string[]) => {
    console.log(personalInfoFieldValidation(key, value), key, value);
    setError((prev) => ({
      ...prev,
      ...personalInfoFieldValidation(key, value),
    }));
  };

  const proceed = () => {
    const err = personalInfoValidation({
      firstName,
      middleName,
      lastName,
      gender,
    });

    if (Object.keys(err).length) {
      setError(err);
      return;
    }
    setError({});
    if (step < totalSteps) setStep(step + 1);
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
            error={error.firstName}
            onBlur={() => validateInput('firstName', firstName)}
            field="input"
            value={firstName}
            onChange={setFirstName}
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
            error={error.middleName}
            onBlur={() => middleName && validateInput('middleName', middleName)}
            field="input"
            value={middleName}
            onChange={setMiddleName}
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
            error={error.lastName}
            onBlur={() => validateInput('lastName', lastName)}
            field="input"
            value={lastName}
            onChange={setLastName}
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
            list={['male', 'female', 'test']}
            value={gender}
            onSelect={setGender}
            onBlur={() => validateInput('gender', gender)}
            error={error.gender}
          />
          {/* <CustomField
            error={error.gender}
            onBlur={() => validateInput('gender', gender)}
            field="select"
            value={gender}
            onSelect={setGender}
            filterFn={filterFn}
            placeholder="Select your Gender"
          >
            <CustomField.DropdownWrapper>
              {list.map((v) => (
                <CustomField.Dropdown value={v} key={v}>
                  <span className="p-2 capitalize block">{v}</span>
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField> */}
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
          <CustomField
            field="date-time"
            onChange={(arg: Date | null) => setDateOfBirth(arg)}
            value={dateOfBirth}
            format="dd/MM/yyyy"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
            calendarIcon={null}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nationality
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={nationality}
            filterFn={filterCountryFn}
            onChange={setNationality}
            placeholder="Choose your nationality"
          >
            <CustomField.DropdownWrapper loading={fetchingCountry} width={100}>
              {countryList.map((v) => (
                <CustomField.Dropdown value={v} key={v}>
                  <span className="p-2 capitalize block">{v}</span>
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          State of Origin
        </label>
        <div className="mt-2">
          <CustomField
            field="input"
            value={stateOfOrigin}
            onChange={setStateOfOrigin}
            filterFn={filterStateFn}
            placeholder="Select your State of origin"
          >
            <CustomField.DropdownWrapper>
              {stateList.map((v) => (
                <CustomField.Dropdown value={v} key={v}>
                  <span className="p-2 capitalize block">{v}</span>
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
      <PrevNextBtn
        disablePrev={step === 1}
        disableNext={step === totalSteps}
        prevAction={() => step > 1 && setStep(step - 1)}
        nextAction={() => {
          proceed();
        }}
      />
    </>
  );
};

export default memo(PersonalInfoForm);
