/* eslint-disable react/destructuring-assignment */
import {
  memo,
  useRef,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
  Children,
  isValidElement,
  FC,
} from 'react';
import { IBaseProp } from '~src/shared-ts-types/react-types';
import CancelIcon from '~src/assets/Icons/CancelIcon';
import Icon from '~src/assets/Icons';
import {
  useCustomFieldContext,
  CustomFieldContext,
} from './hooks-custom-field/useCustomFieldContext';
import { Tag } from '../ui/Others';

const Editable = () => {
  const {
    onChange,
    filterFn,
    value,
    type,
    id,
    search,
    placeholder,
    icon = filterFn ? 'caretDown' : 'search',
  } = useCustomFieldContext();

  const dateTypes = ['month', 'week', 'date'];

  return (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <input
        data-testid="custom-input"
        {...(id && { id })}
        autoComplete="true"
        onChange={(e) => {
          onChange?.(e.target.value);
          filterFn?.(e.target.value);
        }}
        onBlur={(e) => filterFn?.(e.target.value, onChange)}
        value={value as string}
        type={type ?? (search ? 'search' : 'text')}
        placeholder={placeholder || 'Search...'}
        className={`p-2 pl-4 first-letter:uppercase appearance-none outline-none w-full ${
          !search && typeof search === 'boolean'
            ? 'cursor-pointer'
            : 'cursor-text'
        }`}
      />
      {icon && !dateTypes.includes(type || '') && (
        <span className=" mr-1">
          <Icon height={20} width={20} name={icon} />
        </span>
      )}
    </div>
  );
};
Editable.displayName = 'Editable';

const NonEditable = () => {
  const {
    onSelect,
    value,
    placeholder = 'Select...',
  } = useCustomFieldContext();
  const emptyValue = <span className="text-gray-400">{placeholder}</span>;

  return (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <div
        data-testid="custom-select"
        tabIndex={0}
        className={` first-letter:uppercase appearance-none outline-none max-w-full cursor-pointer grow ${
          typeof value === 'string'
            ? 'p-2'
            : Array.isArray(value)
              ? 'flex gap-2 overflow-x-auto max-w-full p-2'
              : ''
        }`}
      >
        {(() => {
          if (Array.isArray(value)) {
            if (value.length) {
              return value.map((prop) => (
                <Tag onClick={() => onSelect?.(prop)} key={Math.random()}>
                  <div className="flex items-center">
                    <span className=" whitespace-nowrap pr-2">
                      {prop.split('_').join(' ')}
                    </span>
                    <CancelIcon width={16} height={16} strokeWidth={3} />
                  </div>
                </Tag>
              ));
            }
            return emptyValue;
          }
          if (typeof value === 'string' && value) {
            return value.split('_').join(' ');
          }
          return value || emptyValue;
        })()}
      </div>
      <span className=" mr-1">
        <Icon height={20} width={20} name="caretDown" />
      </span>
    </div>
  );
};
NonEditable.displayName = 'NonEditable';

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

type EditableCommonProp = {
  field: 'input' | 'date';
  onChange: (arg: string) => void;
  value: string;
  search?: boolean;
  type?: string;
  icon?: null | 'search' | 'caretDown';
  id?: string;
  placeholder?: string;
  children?: JSX.Element;
};

type EditableProp =
  | ({
      children: JSX.Element;
      filterFn: (v: string) => void;
    } & EditableCommonProp)
  | ({
      children?: never;
      filterFn?: never;
    } & EditableCommonProp);

type NonEditableProp = {
  field: 'select';
  children: ReactNode;
  placeholder?: string;
  onSelect: (arg: string) => void;
} & (
  | {
      value: string[];
      filterFn: (v: string) => void;
    }
  | { value: JSX.Element | string; filterFn?: never }
);

const CustomField = (props: EditableProp | NonEditableProp) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = useRef(false);

  const childProp = (props.children
    ? Children.toArray(props.children)
    : []) as unknown as [ReactNode];

  if (childProp?.length > 1) {
    throw Error('Component can only have one DropdownWrapper as children');
  }
  if (
    isValidElement(childProp[0]) &&
    (childProp[0].type as FC).displayName !== 'DropdownWrapper'
  ) {
    throw Error('only DropdownWrapper allowed as children');
  }

  const focus = useCallback(() => {
    elementRef.current?.focus();
    if (dropdownRef.current) {
      dropdownRef.current.style.animationName = 'dropdown';
      dropdownRef.current.style.display = 'block';
    }
  }, []);

  const blur = useCallback(() => {
    elementRef.current?.blur();
    if (dropdownRef.current) {
      dropdownRef.current.style.animationName = 'close-dropdown';
      toggleDropdown.current = false;
    }
  }, []);

  const toggle = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
      if (
        elementRef.current?.contains(e.target as Node) &&
        toggleDropdown.current
      ) {
        focus();
      } else blur();
    },
    [blur, focus]
  );

  useEffect(() => {
    document.addEventListener('click', toggle);
    return () => {
      document.removeEventListener('click', toggle);
    };
  }, []);

  const contextProps = useMemo(
    () => ({
      blur,
      focus,
      elementRef,
      dropdownRef,
      field: props.field,
      value: props.value,
      placeholder: props.placeholder,
      ...(props.field === 'select'
        ? {
            onSelect: props.onSelect,
            filterFn: props.filterFn,
          }
        : {
            search: props.search,
            type: props.field === 'date' ? 'date' : props.type,
            id: props.id,
            icon: props.icon,
            onChange: props.onChange,
            ...(props.children && { filterFn: props.filterFn }),
          }),
    }),
    [props.value, props.filterFn, props.placeholder]
  );

  return (
    <CustomFieldContext.Provider value={contextProps}>
      <div
        className="flex h-full relative"
        onClick={(e) => {
          if (props.field === 'select') {
            toggleDropdown.current = !toggleDropdown.current;
            return;
          }
          if (dropdownRef.current?.contains(e.target as Node)) {
            toggleDropdown.current = false;
          } else toggleDropdown.current = true;
        }}
        ref={elementRef}
      >
        {['input', 'date'].includes(props.field) && <Editable />}
        {props.field === 'select' && <NonEditable />}

        {props.children}
      </div>
    </CustomFieldContext.Provider>
  );
};

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;

export default CustomField;
