import { createContext, useContext, RefObject } from 'react';

export const CustomFieldContext = createContext<{
  focus: () => void;
  blur: () => void;
  elementRef: RefObject<HTMLDivElement | HTMLInputElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  field: 'input' | 'select';
} | null>(null);

export const useCustomFieldContext = () => {
  const customFieldContext = useContext(CustomFieldContext);

  if (!customFieldContext) {
    throw Error('Component should be used inside the CustomField');
  }
  return customFieldContext;
};
