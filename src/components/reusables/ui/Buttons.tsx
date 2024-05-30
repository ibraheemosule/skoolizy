import { memo } from 'react';
import { IBaseProp } from '~src/shared-ts-types/react-types';

type TBtn = Omit<IBaseProp, 'children'> & { onClick?: () => void };
type TBtnWithChild = IBaseProp & { onClick?: () => void };

export const ActionBtn = memo(
  ({ children, className, onClick }: TBtnWithChild) => (
    <button
      onClick={onClick}
      className={`text-white bg-purple.dark rounded-lg ${className}`}
      type="button"
    >
      {children}
    </button>
  )
);
ActionBtn.displayName = 'ActionBtn';

export const BaseBtn = memo(
  ({ children, className, onClick }: TBtnWithChild) => (
    <button onClick={onClick} className={`${className}`} type="button">
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
