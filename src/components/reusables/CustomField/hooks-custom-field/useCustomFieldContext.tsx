import { createContext, useContext, RefObject } from 'react';

export const CustomFieldContext = createContext<{
  focus: () => void;
  blur: () => void;
  elementRef: RefObject<HTMLDivElement | HTMLInputElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  field: 'input' | 'select' | 'date';
  type?: string;
  icon?: null | 'search' | 'caretDown';
  id?: string;
  value: string | string[] | JSX.Element;
  placeholder?: string;
  pattern?: string;
  onBlur?: () => void;
  error?: string;
  search?: boolean;
  filterFn?: (
    v: string,
    inputFieldBlurValueCheck?: (arg: string) => void
  ) => void;
  onChange?: (e: string) => void;
  onSelect?: (e: string) => void;
} | null>(null);

export const useCustomFieldContext = () => {
  const customFieldContext = useContext(CustomFieldContext);

  if (!customFieldContext) {
    throw Error('Component should be used inside the CustomField');
  }
  return customFieldContext;
};
