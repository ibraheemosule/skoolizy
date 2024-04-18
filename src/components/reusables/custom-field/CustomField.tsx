/* eslint-disable react/destructuring-assignment */
import {
  memo,
  useRef,
  RefObject,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { IBaseProp } from 'src/ts-types/react-types';
import SearchIcon from 'src/assets/icons/SearchIcon';
import AngleDownIcon from 'src/assets/icons/AngleDownIcon';
import CancelIcon from 'src/assets/icons/CancelIcon';
import {
  useCustomFieldContext,
  CustomFieldContext,
} from './useCustomFieldContext';
import { Tag } from '../ui/others';

interface ChildProp {
  elementRef: RefObject<HTMLDivElement | HTMLInputElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  focus: () => void;
  blur: () => void;
}

const Icon = ({
  search,
  onClick,
}: {
  search?: boolean;
  onClick?: () => void;
}) => (
  <button onClick={onClick} className="inline-block mr-2">
    {search ? <SearchIcon size={20} /> : <AngleDownIcon size={20} />}
  </button>
);

type FieldPropsType = Partial<ChildProp> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  search?: boolean;
  type?: string;
  icon?: boolean;
  id?: string;
  placeholder?: string;
};

const Editable = memo(
  ({ type, value, search, icon, id, placeholder }: FieldPropsType) => {
    const { focus, onChange, filterListFn } = useCustomFieldContext();

    return (
      <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
        <input
          data-testid="custom-input"
          {...(id ? { id } : {})}
          onFocus={focus}
          onChange={(e) => {
            onChange?.(e.target.value);
            filterListFn?.(e.target.value);
          }}
          value={value}
          type={type ?? (search ? 'search' : 'text')}
          placeholder={placeholder || ''}
          className={`p-2 pl-4 appearance-none outline-none w-full ${
            !search && typeof search === 'boolean'
              ? 'cursor-pointer'
              : 'cursor-text'
          }`}
        />

        {icon ? (
          <Icon
            search={search}
            // onClick={() => {
            //   if (
            //     dropdownRef?.current &&
            //     window
            //       .getComputedStyle(dropdownRef.current)
            //       .getPropertyValue('display') === 'none'
            //   ) {
            //     focus?.();
            //   }
            // }}
          />
        ) : null}
      </div>
    );
  }
);
Editable.displayName = 'Editable';

type NonEditableType = {
  value: ReactNode;
};

const NonEditable = memo(({ value }: NonEditableType) => {
  const { onSelect } = useCustomFieldContext();

  return (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <div
        data-testid="custom-select"
        tabIndex={0}
        className={`appearance-none outline-none max-w-full cursor-pointer grow ${
          typeof value === 'string'
            ? 'p-2'
            : Array.isArray(value)
              ? 'flex gap-2 overflow-x-auto max-w-full p-2'
              : ''
        }`}
      >
        {Array.isArray(value)
          ? value.length
            ? value.map((prop) => (
                <Tag onClick={() => onSelect?.(prop)} key={Math.random()}>
                  <div className="flex">
                    <span className=" whitespace-nowrap pr-2">{prop}</span>
                    <button onClick={() => console.log('here')}>
                      <CancelIcon width={16} height={16} strokeWidth={3} />
                    </button>
                  </div>
                </Tag>
              ))
            : 'Select...'
          : value || 'Select...'}
      </div>
      <Icon />
    </div>
  );
});
NonEditable.displayName = 'NonEditable';

type TDropdown = IBaseProp & {
  value: string | null;
};

const Dropdown = memo(({ children, value }: TDropdown) => {
  const { onSelect, fieldValue } = useCustomFieldContext();

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
        if (value) onSelect?.(value);
      }}
      className={`${typeof children === 'string' && 'p-2'} relative ${
        dropdownValueIsSelected ? 'bg-gray-100 text-black' : 'bg-white'
      }  hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
    >
      {children}
    </div>
  );
});
Dropdown.displayName = 'Dropdown';

type DropdownWrapperPropsType = {
  children: ReactNode;
  closeOnClick?: boolean;
} & (
  | {
      multiselect: true;
    }
  | { multiselect?: false }
);

const noResult = <Dropdown value={null}> No Result </Dropdown>;
const DropdownWrapper = memo(
  ({
    children,
    multiselect = false,
    closeOnClick = true,
  }: DropdownWrapperPropsType) => {
    const { dropdownRef, field, filterListFn } = useCustomFieldContext();

    // if (!filterListFn && multiselect) {
    //   throw Error(
    //     'Pass a filter function of ((arg: string) => void) to filter the dropdown list'
    //   );
    // }
    // if (field === 'input' && multiselect) {
    //   throw Error('Multiselect prop is invalid for a field  of input');
    // }

    return (
      <div
        ref={dropdownRef}
        onClick={(e) => (closeOnClick ? null : e.stopPropagation())}
        className="dropdown hidden min-w-max dropdown absolute text-center cursor-pointer mt-2 shadow top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
      >
        {multiselect && field === 'select' && (
          <Dropdown value={null}>
            <div className="py-2 px-1 bg-white">
              <input
                onChange={(e) => filterListFn?.(e.target.value)}
                placeholder="Search"
                className="dropdown-search w-full rounded-md p-2 outline-none border-0 bg-gray-100"
              />
            </div>
          </Dropdown>
        )}
        {Array.isArray(children) && !children.length
          ? noResult
          : children || noResult}
      </div>
    );
  }
);
DropdownWrapper.displayName = 'DropdownWrapper';

type EditableProp = {
  field: 'input';
  onChange?: (arg: string) => void;
  value?: string | number;
  children?: ReactNode;
} & {
  field: 'input';
  onChange?: (arg: string) => void;
  value?: string | number;
  search?: boolean;
  type?: string;
  icon?: boolean;
  id?: string;
  placeholder?: string;
};

type NonEditableProp = {
  field: 'select';
  children: ReactNode;
  onSelect: (arg: string) => void;
} & (
  | {
      value: string[];
      filterListFn: (v: string) => void;
    }
  | { value: string | JSX.Element }
);

const CustomField = (props: EditableProp | NonEditableProp) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = useRef(false);

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
      fieldValue: props.value,
      ...(props.field === 'select'
        ? {
            onSelect: props.onSelect,
            filterListFn: (
              props as unknown as { filterListFn: (arg: string) => void }
            ).filterListFn,
          }
        : { onChange: props.onChange }),
    }),
    [props.value]
  );

  return (
    <CustomFieldContext.Provider value={contextProps}>
      <div
        className="flex h-full relative"
        // // {...(props.field === 'input' ? { onFocus: focus } : {})}
        onClick={() => {
          toggleDropdown.current = !toggleDropdown.current;
        }}
        ref={elementRef}
      >
        {props.field === 'input' && (
          <Editable
            onChange={(e) => props.onChange?.(e.target.value)}
            value={props.value}
            search={props.search}
            type={props.type}
            icon={props.icon}
            id={props.id}
            placeholder={props.placeholder}
          />
        )}
        {props.field === 'select' && (
          <NonEditable value={props.value as string | number} />
        )}

        {props.children}
      </div>
    </CustomFieldContext.Provider>
  );
};

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;

export default CustomField;
