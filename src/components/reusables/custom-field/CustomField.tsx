/* eslint-disable react/destructuring-assignment */
import {
  memo,
  useRef,
  RefObject,
  ReactNode,
  useCallback,
  useMemo,
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
  ({
    onChange,
    type,
    value,
    search,
    icon,
    id,
    placeholder,
  }: FieldPropsType) => {
    const { focus, elementRef, dropdownRef } = useCustomFieldContext();

    return (
      <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
        <input
          data-testid="custom-input"
          {...(id ? { id } : {})}
          onFocus={focus}
          onChange={onChange}
          value={value}
          ref={elementRef as RefObject<HTMLInputElement>}
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
            onClick={() => {
              if (
                dropdownRef?.current &&
                window
                  .getComputedStyle(dropdownRef.current)
                  .getPropertyValue('display') === 'none'
              ) {
                focus?.();
              }
            }}
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
  const { focus, elementRef, dropdownRef } = useCustomFieldContext();
  return (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <div
        data-testid="custom-select"
        onClick={focus}
        tabIndex={0}
        ref={elementRef}
        className={`appearance-none outline-none max-w-full cursor-pointer  grow ${
          typeof value === 'string'
            ? 'p-2'
            : Array.isArray(value)
              ? 'flex gap-2 overflow-x-auto max-w-full p-2'
              : ''
        }`}
      >
        {Array.isArray(value)
          ? value.map((child) => (
              <Tag key={Math.random()}>
                <div className="flex">
                  <span className=" whitespace-nowrap pr-2">{child}</span>
                  <button onClick={() => console.log('here')}>
                    <CancelIcon size={16} />
                  </button>
                </div>
              </Tag>
            ))
          : value}
      </div>
      <Icon
        onClick={() => {
          if (
            window
              .getComputedStyle(dropdownRef!.current!)
              .getPropertyValue('display') === 'none'
          ) {
            focus?.();
          }
        }}
      />
    </div>
  );
});
NonEditable.displayName = 'NonEditable';

const Dropdown = memo(
  ({ children, onClick }: IBaseProp & { onClick?: () => void }) => {
    useCustomFieldContext();
    return (
      <div
        data-testid="dropdown"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className={`${
          typeof children === 'string' && 'p-2'
        } relative bg-white  hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
      >
        {children}
      </div>
    );
  }
);
Dropdown.displayName = 'Dropdown';

type DropdownWrapperPropsType = {
  dropdownRef: RefObject<HTMLDivElement>;
  children: ReactNode;
  multiselect: boolean;
  blur: () => void;
  elementRef: RefObject<HTMLDivElement>;
};

const DropdownWrapper = memo(
  ({ children, multiselect }: Partial<DropdownWrapperPropsType>) => {
    const { dropdownRef, field } = useCustomFieldContext();

    return (
      <div
        ref={dropdownRef}
        className="dropdown hidden min-w-max dropdown absolute text-center cursor-pointer mt-1 shadow top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
      >
        {field === 'select' && multiselect && (
          <Dropdown>
            <div className="p-2 bg-white">
              <input
                placeholder="Search"
                className="dropdown-search rounded-md p-2 outline-none border-0 bg-gray-100"
              />
            </div>
          </Dropdown>
        )}
        {children}
      </div>
    );
  }
);
DropdownWrapper.displayName = 'DropdownWrapper';

type EditableProp = {
  field: 'input';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  search?: boolean;
  type?: string;
  icon?: boolean;
  id?: string;
  placeholder?: string;
};

type NonEditableProp = {
  field: 'select';
  value: ReactNode;
};

const CustomField = (
  props: (EditableProp | NonEditableProp) & { children?: ReactNode }
) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const focus = useCallback(() => {
    elementRef.current?.focus();
    if (dropdownRef.current) {
      dropdownRef.current.style.animationName = 'dropdown';
      dropdownRef.current!.style.display = 'block';
    }
  }, []);

  const blur = useCallback(() => {
    elementRef.current?.blur();
    if (dropdownRef.current) {
      dropdownRef.current!.style.animationName = 'close-dropdown';
    }
  }, []);

  const value = useMemo(
    () => ({
      blur,
      focus,
      elementRef,
      dropdownRef,
      field: props.field,
    }),
    [blur, focus, elementRef, dropdownRef, props.field]
  );

  return (
    <CustomFieldContext.Provider value={value}>
      <div
        className="flex h-full relative"
        {...(props.field === 'input' ? { onFocus: focus } : {})}
        onMouseLeave={blur}
        onClick={focus}
      >
        {props.field === 'input' && (
          <Editable
            onChange={props.onChange}
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
