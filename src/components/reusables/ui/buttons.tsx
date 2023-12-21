import { memo } from 'react';
import { IBaseProp } from 'src/ts-types/react-types';

export const ActionBtn = memo(({ children, className }: IBaseProp) => (
  <button
    className={`text-white bg-purple.dark rounded-lg ${className}`}
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

export const Check = () => (
  <button
    className="p-1 text-purple.dark hover:text-purple.light"
    type="button"
  >
    <i className="fa fa-check  " />
  </button>
);

export const Cancel = () => (
  <button className="p-1 text-red-800 hover:text-purple.light" type="button">
    <i className="fa fa-times " />
  </button>
);
