import { memo } from 'react';

import { IBaseProp } from '~utils/shared-ts-types/react-types';

type TDropdown = IBaseProp & {
  value: string | number | null;
  fieldValue?: string | number | string[] | number[];
  onSelect?: (e: string | number) => void;
};

const Dropdown = memo(
  ({ children, value, onSelect, fieldValue }: TDropdown) => {
    let dropdownValueIsSelected: boolean;

    if (Array.isArray(fieldValue)) {
      dropdownValueIsSelected = fieldValue?.some(
        (v) => String(v).toLowerCase() === String(value)?.toLowerCase()
      );
    } else if (['string', 'number'].includes(typeof fieldValue)) {
      dropdownValueIsSelected =
        String(fieldValue).toLowerCase() === String(value)?.toLowerCase();
    } else {
      dropdownValueIsSelected = !!(
        value && String(fieldValue).includes(String(value))
      );
    }

    return (
      <div
        data-testid="dropdown"
        onClick={() => {
          if (value) onSelect?.(value);
        }}
        className={`${
          typeof children === 'string'
            ? 'p-2 py-3 break-words first-letter:capitalize'
            : ''
        } relative ${
          dropdownValueIsSelected ? 'bg-gray-100 text-black' : 'bg-white'
        }  hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
      >
        {children}
      </div>
    );
  }
);
Dropdown.displayName = 'Dropdown';

export default Dropdown;
