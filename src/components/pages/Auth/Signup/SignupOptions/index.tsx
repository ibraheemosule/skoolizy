import { memo } from 'react';
import { useSignupContext } from '../u-signup';
import Icon from '~assets/Icons';

const SignupOptions = () => {
  const { setStep, setSignupDetails } = useSignupContext();

  return (
    <div className="mt-4 grid gap-8 grid-cols-2">
      {Array(4)
        .fill('')
        .map(() => (
          <button
            key={Math.random()}
            onClick={() => {
              setStep((prev) => prev + 1);
              setSignupDetails({ role: 'staff' });
            }}
            className="flex items-center gap-2 px-8 py-3 bg-purple rounded-lg text-white font-semibold text-xl transform transition-transform duration-200 hover:scale-105"
          >
            <Icon name="tutor" fill="currentColor" />
            Staff
          </button>
        ))}
    </div>
  );
};

export default memo(SignupOptions);
