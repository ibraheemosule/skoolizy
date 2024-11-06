import { Dispatch, SetStateAction, ReactNode } from 'react';

export type TModal = {
  close: Dispatch<SetStateAction<boolean>> | (() => void);
  action?: () => void;
  actionText?: string;
  size?: 'sm' | 'md' | 'lg';
  scroll?: boolean;
  fixedActionBtn?: boolean;
  isLoading?: boolean;
  btnClass?: string;
} & {
  [key in 'title' | 'content']?: ReactNode;
};

export type TError = { response: { data: { error: string } } } & {
  message: string;
};
