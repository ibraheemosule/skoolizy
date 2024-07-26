import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { TIconNames } from '~assets/Icons/IconNames';
import Icon from '~assets/Icons';

type TTextField = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  icon?: TIconNames;
  onBlur?: () => void;
};

const TextField = ({ error, icon, ...props }: TTextField) => {
  const prevValue = useRef('');

  useEffect(() => {
    if (props.value || prevValue.current) {
      prevValue.current = props.value as string;
      props.onBlur?.();
    }
  }, [props.value]);

  return (
    <div className="flex h-full relative">
      <div
        className={`w-full cursor-pointer bg-white items-center border ${
          error ? 'border-pink-800' : 'border-gray-200'
        }  rounded-lg overflow-hidden`}
      >
        <input
          placeholder="Search..."
          className="p-2 pl-4 first-letter:uppercase appearance-none outline-none w-full"
          {...props}
        />
        {icon && (
          <button className=" mr-1">
            <Icon height={20} width={20} name={icon} />
          </button>
        )}
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
