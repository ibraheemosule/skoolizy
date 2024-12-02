import { Dispatch, FC, memo, SetStateAction } from 'react';
import Icon from '~assets/Icons';

const loginOptions = {
  guardians: 'user',
  staffs: 'tutor',
} as const;

type LoginOptionsPropType = {
  setAccount: Dispatch<SetStateAction<string>>;
};

const LoginOptions: FC<LoginOptionsPropType> = ({ setAccount }) => (
  <div className="mt-4 grid gap-8 grid-cols-2">
    {Object.entries(loginOptions).map(([option, iconName]) => (
      <button
        key={option}
        onClick={() => {
          setAccount(option);
        }}
        className="flex capitalize items-center gap-2 px-8 py-3 bg-purple rounded-lg text-white font-semibold text-xl transform transition-transform duration-200 hover:scale-105"
      >
        <Icon name={iconName} fill="currentColor" />
        {option.slice(0, option.length - 1)}
      </button>
    ))}
  </div>
);

export default memo(LoginOptions);
