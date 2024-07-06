import { memo, useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import CustomField from '~components/reusables/CustomField';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import logo from '~assets/images/logo.png';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import useGetCountriesAndState from '~components/reusables/hooks/useGetCountriesAndState';

const Signup = () => {
  const [firstName, setFirstName] = useCustomField('');
  const [middleName, setMiddleName] = useCustomField('');
  const [lastName, setLastName] = useCustomField('');
  const [email, setEmail] = useCustomField('');
  const [password, setPassword] = useCustomField('');
  const [nationality, setNationality, countryList, filterCountryFn] =
    useCustomField('', []);
  const [stateOfOrigin, setStateOfOrigin, stateList, filterStateFn] =
    useCustomField('', []);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

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

  return (
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

          <div className="mt-10">
            <div>
              <form
                action="https://goal.com"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <CustomField
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
                    <CustomField
                      field="select"
                      value={lastName}
                      onSelect={setLastName}
                      placeholder="Select your Gender"
                    >
                      <CustomField.DropdownWrapper>
                        {['male', 'female'].map((v) => (
                          <CustomField.Dropdown value={v} key={v}>
                            <span className="p-2 capitalize block">{v}</span>
                          </CustomField.Dropdown>
                        ))}
                      </CustomField.DropdownWrapper>
                    </CustomField>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Birth
                  </label>
                  <div className="mt-2">
                    <DateTimePicker
                      format="dd/MM/yyyy"
                      dayPlaceholder="DD"
                      monthPlaceholder="MM"
                      yearPlaceholder="YYYY"
                      calendarIcon={null}
                      onChange={(arg: Date | null) => setDateOfBirth(arg)}
                      value={dateOfBirth}
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
                      <CustomField.DropdownWrapper
                        loading={fetchingCountry}
                        width={100}
                      >
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
                </div>

                <ActionBtn>Sign up</ActionBtn>
              </form>
            </div>

            <div className="mt-10">
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
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Twitter
                  </span>
                </a>

                <a
                  href="https://goal.com"
                  className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-1.5  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[https://goal.com24292F]"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
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
  );
};

export default memo(Signup);
