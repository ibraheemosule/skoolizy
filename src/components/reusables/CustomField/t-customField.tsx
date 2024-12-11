import { ReactNode } from 'react';
import { DateTimePickerProps } from 'react-datetime-picker';

export type EditableCommonProp = {
  field: 'input' | 'date';
  onChange: (arg: string) => void;
  value: string;
  search?: boolean;
  type?: string;
  icon?: null | 'search' | 'caretDown';
  id?: string;
  placeholder?: string;
  children?: JSX.Element;
  pattern?: string;
  error?: string;
};

export type EditableProp =
  | ({
      children: JSX.Element;
      filterFn: (v: string) => void;
    } & EditableCommonProp)
  | ({
      children?: never;
      filterFn?: never;
    } & EditableCommonProp);

export type NonEditableProp = {
  field: 'select';
  children: ReactNode;
  placeholder?: string;
  onSelect: (arg: string) => void;
  error?: string;
} & (
  | {
      value: string[];
      filterFn: (v: string) => void;
    }
  | { value: JSX.Element | string; filterFn?: never }
);

export interface IDatePicker extends DateTimePickerProps {
  field: 'date-time';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type TCustomField = (EditableProp | NonEditableProp | IDatePicker) & {
  onBlur?: () => void;
};
