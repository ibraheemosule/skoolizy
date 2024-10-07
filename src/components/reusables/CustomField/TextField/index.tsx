import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TIconNames } from '~assets/Icons/IconNames';
import Icon from '~assets/Icons';

type TTextField = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  icon?: TIconNames;
  onBlur?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const TextField = ({ error, icon, ...props }: TTextField) => {
  const prevValue = useRef('');
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';

  useEffect(() => {
    if (props.value || prevValue.current) {
      prevValue.current = props.value as string;
      props.onBlur?.();
    }
  }, [props.value]);

  return (
    <div className="flex h-full relative">
      <div
        className={`w-full cursor-pointer ${
          props.disabled ? 'bg-gray-200' : 'bg-white cursor-pointer'
        } items-center border ${
          error ? 'border-pink-800' : 'border-gray-200'
        }  rounded-lg overflow-hidden`}
      >
        <input
          placeholder="Search..."
          className="p-2 pl-4 first-letter:uppercase appearance-none outline-none w-full"
          {...props}
          {...(showPassword && { type: 'text' })}
        />
        {icon ? (
          <button className=" mr-4 absolute right-0 top-1/2 -translate-y-1/2">
            <Icon height={20} width={20} name={icon} />
          </button>
        ) : isPassword ? (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className=" mr-4 absolute right-0 top-1/2 -translate-y-1/2"
          >
            <Icon
              height={20}
              width={20}
              name={showPassword ? 'eye' : 'eyeCancel'}
            />
          </button>
        ) : null}
      </div>
      {error && (
        <small className="text-pink-800 absolute -bottom-6 left-0 first-letter:capitalize">
          {error}
        </small>
      )}
    </div>
  );
};
export default TextField;
