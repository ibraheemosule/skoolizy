import { ReactNode } from 'react';

export interface IChild {
  children: ReactNode;
}

export interface IBaseProp extends IChild {
  className?: string;
  testId?: string;
}

export type IconType = {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
};

export interface IBannerOptions {
  text: string;
  type: 'warning' | 'error' | 'info' | 'success';
  action?: (() => void) | null;
  btnText?: string;
  persist?: boolean;
  id?: string;
  timeout?: number;
}
