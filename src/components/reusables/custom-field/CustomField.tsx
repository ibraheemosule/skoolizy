import {
  memo,
  useRef,
  cloneElement,
  isValidElement,
  Children,
  ReactElement,
  FC,
  RefObject,
  ReactNode,
} from 'react';

import { IBaseProp } from 'src/ts-types/react-types';
import SearchIcon from 'src/assets/icons/SearchIcon';
import AngleDownIcon from 'src/assets/icons/AngleDownIcon';
import CancelIcon from 'src/assets/icons/CancelIcon';
import { Tag } from '../ui/others';

interface ChildProp {
  elementRef: RefObject<HTMLDivElement | HTMLInputElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  focus: () => void;
  blur: () => void;
}

const CustomField = ({ children }: { children: ReactElement }) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function focus() {
    elementRef.current?.focus();
    if (dropdownRef.current) {
      dropdownRef.current.style.animationName = 'dropdown';
      dropdownRef.current!.style.display = 'block';
    }
  }

  function blur() {
    elementRef.current?.blur();
    if (dropdownRef.current) {
      dropdownRef.current!.style.animationName = 'close-dropdown';
    }
  }

  const renderChildren = () =>
    (children.props.children || [children]).map((child: ReactElement) =>
      Children.map(child, (innerChild) => {
        if (isValidElement(child as unknown as FC<ChildProp>)) {
          return cloneElement(innerChild, {
            elementRef,
            dropdownRef,
            focus,
            blur,
          });
        }
        return child;
      })
    );

  return (
    <div className="flex h-full relative" onMouseLeave={blur}>
      {renderChildren()}
    </div>
  );
};

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
    elementRef,
    focus,
    onChange,
    type,
    value,
    search,
    icon,
    id,
    placeholder,
    dropdownRef,
  }: FieldPropsType) => (
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
  )
);
Editable.displayName = 'Editable';

type NonEditableType = Partial<ChildProp> & {
  children?: ReactNode;
};

// props elementRef, focus, blur comes from the CustomField component above
const NonEditable = memo(
  ({ elementRef, focus, children, dropdownRef }: NonEditableType) => (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <div
        data-testid="custom-select"
        onClick={focus}
        tabIndex={0}
        ref={elementRef}
        className={`appearance-none outline-none max-w-full cursor-pointer  ${
          typeof children === 'string'
            ? 'p-2'
            : Array.isArray(children)
              ? 'flex gap-2 overflow-x-auto max-w-full p-2'
              : ''
        }`}
      >
        {Array.isArray(children)
          ? children.map((child) => (
              <Tag key={Math.random()}>
                <div className="flex">
                  <span className=" whitespace-nowrap pr-2">{child}</span>
                  <button onClick={() => console.log('here')}>
                    <CancelIcon size={16} />
                  </button>
                </div>
              </Tag>
            ))
          : children}
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
  )
);
NonEditable.displayName = 'NonEditable';

const Dropdown = memo(
  ({ children, onClick }: IBaseProp & { onClick?: () => void }) => (
    <div
      data-testid="dropdown-wrapper"
      onClick={onClick}
      className={`${
        typeof children === 'string' && 'p-2'
      } relative bg-white  hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
    >
      {children}
    </div>
  )
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
  ({
    children,
    dropdownRef,
    multiselect,
  }: Partial<DropdownWrapperPropsType>) => (
    <div
      ref={dropdownRef}
      className="dropdown hidden min-w-max dropdown absolute text-center cursor-pointer mt-1 shadow top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
    >
      {multiselect ? (
        <Dropdown>
          <div className="p-2 bg-white">
            <input
              placeholder="Search"
              className="dropdown-search rounded-md p-2 outline-none border-0 bg-gray-100"
            />
          </div>
        </Dropdown>
      ) : null}
      {children}
    </div>
  )
);
DropdownWrapper.displayName = 'DropdownWrapper';

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;
CustomField.Editable = Editable;
CustomField.NonEditable = NonEditable;

export default CustomField;
