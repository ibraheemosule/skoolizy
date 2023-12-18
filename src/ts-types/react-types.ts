import { ReactNode } from 'react';

export interface IChild {
  children: ReactNode;
}

export interface IBaseProp extends IChild {
  className?: string;
}
