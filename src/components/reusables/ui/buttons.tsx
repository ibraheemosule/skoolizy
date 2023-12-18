import { memo } from 'react';
import { IBaseProp } from 'src/ts-types/react-types';

export const ActionBtn = memo(({ children, className }: IBaseProp) => (
  <button
    className={`text-white bg-dark.purple rounded-lg px-4 py-2 ${className}`}
    type="button"
  >
    {children}
  </button>
));
ActionBtn.displayName = 'ActionBtn';

export const DeleteBtn = memo(({ children, className }: IBaseProp) => (
  <button className={`text-white bg-red-700 ${className}`} type="button">
    {children}
  </button>
));
DeleteBtn.displayName = 'DeleteBtn';
