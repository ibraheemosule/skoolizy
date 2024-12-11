import { memo } from 'react';
import { useSignupContext } from '../utils-signup';
import Icon from '~assets/Icons';

const signupOptions = {
  guardians: 'user',
  staffs: 'tutor',
} as const;

const SignupOptions = () => {
  const { setStep, setSignupDetails } = useSignupContext();

  return (
    <div className="mt-4 grid gap-8 grid-cols-2">
      {Object.entries(signupOptions).map(([option, iconName]) => (
        <button
          key={option}
          onClick={() => {
            setStep((prev) => prev + 1);
            setSignupDetails({ group: option });
          }}
          className="flex capitalize items-center gap-2 px-8 py-3 bg-purple rounded-lg text-white font-semibold text-xl transform transition-transform duration-200 hover:scale-105"
        >
          <Icon name={iconName} fill="currentColor" />
          {option.slice(0, option.length - 1)}
        </button>
      ))}
    </div>
  );
};

export default memo(SignupOptions);
