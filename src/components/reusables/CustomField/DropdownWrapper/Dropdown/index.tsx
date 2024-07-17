/* eslint-disable react/destructuring-assignment */
import { memo } from 'react';

import { IBaseProp } from '~src/shared-ts-types/react-types';

import { useCustomFieldContext } from '../../hooks-custom-field/useCustomFieldContext';

type TDropdown = IBaseProp & {
  value: string | null;
};

const Dropdown = memo(({ children, value }: TDropdown) => {
  const { onSelect, value: fieldValue, onChange } = useCustomFieldContext();

  let dropdownValueIsSelected: boolean;
  if (Array.isArray(fieldValue)) {
    dropdownValueIsSelected = fieldValue?.some(
      (v) => v.toLowerCase() === value?.toLowerCase()
    );
  } else if (typeof fieldValue === 'string') {
    dropdownValueIsSelected = fieldValue.toLowerCase() === value?.toLowerCase();
  } else {
    dropdownValueIsSelected = !!(value && String(fieldValue).includes(value));
  }

  return (
    <div
      data-testid="dropdown"
      onClick={() => {
        if (value) (onSelect || onChange)?.(value);
      }}
      className={`${
        typeof children === 'string' ? 'p-2 break-words' : ''
      } relative ${
        dropdownValueIsSelected ? 'bg-gray-100 text-black' : 'bg-white'
      }  hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
    >
      {children}
    </div>
  );
});
Dropdown.displayName = 'Dropdown';

export default Dropdown;
