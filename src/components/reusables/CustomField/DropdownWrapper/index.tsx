import { memo, Children, isValidElement, FC } from 'react';

import Icon from '~src/assets/Icons';
import { useCustomFieldContext } from '../hooks-custom-field/useCustomFieldContext';
import Dropdown from './Dropdown';

type DropdownWrapperPropsType = {
  children: React.ReactElement[];
  closeOnClick?: boolean;
  width?: number;
  loading?: boolean;
};

const DropdownWrapper = memo(
  ({
    children,
    closeOnClick = true,
    width,
    loading,
  }: DropdownWrapperPropsType) => {
    const { dropdownRef, filterFn, value } = useCustomFieldContext();
    const multiselect = Array.isArray(value);

    Children.toArray(children).forEach((child: React.ReactNode) => {
      if (!isValidElement(child)) {
        throw Error('only DropdownWrapper allowed as children');
      }
      if ((child.type as FC).displayName !== 'Dropdown') {
        throw Error('only Dropdown allowed as children');
      }
    });

    if (!filterFn && multiselect) {
      throw Error(
        'Pass a filter function of ((arg: string) => void) to filter the dropdown list'
      );
    }

    return (
      <div
        ref={dropdownRef}
        onClick={(e) => (!closeOnClick || multiselect) && e.stopPropagation()}
        className="dropdown hidden min-w-max dropdown absolute text-center shadow border cursor-pointer mt-2 top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
        style={{ minWidth: width || 'max-content' }}
      >
        {multiselect && (
          <Dropdown value={null}>
            <div className="py-2 px-1 bg-white">
              <input
                onChange={(e) => filterFn?.(e.target.value)}
                placeholder="Search"
                className="dropdown-search w-full rounded-md p-2 outline-none border-0 bg-gray-100"
              />
            </div>
          </Dropdown>
        )}
        {loading ? (
          <div className="bg-white">
            <Icon
              name="spinner"
              height={40}
              width={40}
              fill="#432c81"
              style={{ margin: 'auto' }}
            />
          </div>
        ) : children?.length ? (
          children
        ) : (
          <div className="py-2 px-1 bg-white"> No Result</div>
        )}
      </div>
    );
  }
);
DropdownWrapper.displayName = 'DropdownWrapper';

export default DropdownWrapper;
