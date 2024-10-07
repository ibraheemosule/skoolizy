import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { IBaseProp } from '~src/shared-ts-types/react-types';
import Icon from '~assets/Icons';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  testId?: string;
  loading?: boolean;
};

type TBtn = Omit<IBaseProp, 'children'> & { onClick?: () => void };
type TBtnWithChild = IBaseProp & { onClick?: () => void };

const styles =
  'text-white font-normal bg-purple.dark rounded-lg flex w-full justify-center';

export const ActionBtn = memo(
  ({ children, onClick, testId, loading, className, ...props }: TButton) => (
    <button
      disabled={loading}
      data-testid={testId}
      onClick={onClick}
      className={`${className || styles} ${
        loading
          ? 'opacity-50 cursor-waitx'
          : ` ${className ? '' : 'px-4 py-2 hover:bg-purple'}`
      } ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type="button"
      {...props}
    >
      {loading ? (
        <Icon name="spinner" width={40} height={40} fill="white" />
      ) : (
        children
      )}
    </button>
  )
);
ActionBtn.displayName = 'ActionBtn';

export const BaseBtn = memo(
  ({ children, className, onClick, testId }: TBtnWithChild) => (
    <button
      data-testid={testId}
      onClick={onClick}
      className={`${className}`}
      type="button"
    >
      {children}
    </button>
  )
);
BaseBtn.displayName = 'ActionBtn';

export const DeleteBtn = memo(
  ({ children, className, onClick }: TBtnWithChild) => (
    <button
      onClick={onClick}
      className={`text-white bg-red-700 rounded-lg ${className}`}
      type="button"
    >
      {children}
    </button>
  )
);
DeleteBtn.displayName = 'DeleteBtn';

export const Check = () => (
  <button
    className="p-1 text-purple.dark hover:text-purple.light"
    type="button"
  >
    <i className="fa fa-check  " />
  </button>
);

export const CancelBtn = ({ onClick }: TBtn) => (
  <button
    onClick={() => onClick?.()}
    className="p-1 text-red-800 hover:text-purple.light"
    type="button"
  >
    <i className="fa fa-times " />
  </button>
);
