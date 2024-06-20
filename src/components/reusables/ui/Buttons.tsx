import { memo, useState } from 'react';
import { IBaseProp } from '~src/shared-ts-types/react-types';
import { isFuncPromise } from '~utils/checkers';
import Icon from '~assets/Icons';
import popup from '~utils/popup';

type TBtn = Omit<IBaseProp, 'children'> & { onClick?: () => void };
type TBtnWithChild = IBaseProp & { onClick?: () => void };

type TError = { response: { data: { error: string } } } & { message: string };

export const ActionBtn = memo(
  ({ children, className, onClick, testId }: TBtnWithChild) => {
    const [loading, setLoading] = useState(false);

    const action = async () => {
      if (onClick && isFuncPromise(onClick)) {
        setLoading(true);
        try {
          await onClick();
        } catch (e: unknown) {
          const err = e as TError;
          popup('error', err?.response?.data?.error || err.message);
        } finally {
          setLoading(false);
        }
      } else onClick?.();
    };

    return (
      <button
        disabled={loading}
        data-testid={testId}
        onClick={action}
        className={`text-white font-normal bg-purple.dark rounded-lg flex w-full justify-center ${className} ${
          loading ? 'hover:opacity-50' : 'hover:opacity-50 px-4 py-2 '
        }`}
        type="button"
      >
        {loading ? (
          <Icon name="spinner" width={40} height={40} fill="white" />
        ) : (
          children
        )}
      </button>
    );
  }
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
