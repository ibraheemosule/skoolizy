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

  return <div className="flex h-full relative">{renderChildren()}</div>;
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

type NonEditableType = Partial<Omit<ChildProp, 'dropdownRef'>> & {
  children?: ReactNode;
};

// props elementRef, focus, blur comes from the CustomField component above
const NonEditable = memo(
  ({ elementRef, focus, blur, children }: NonEditableType) => (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <div
        data-testid="custom-select"
        onClick={focus}
        onBlur={blur}
        tabIndex={0}
        ref={elementRef}
        className={`appearance-none outline-none w-full cursor-pointer ${
          typeof children === 'string' ? 'p-2' : ''
        }`}
      >
        {children}
      </div>
      <Icon onClick={focus} />
    </div>
  )
);
NonEditable.displayName = 'NonEditable';

type FieldPropsType = Partial<Omit<ChildProp, 'dropdownRef'>> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
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
    blur,
    onChange,
    type,
    value,
    search,
    icon,
    id,
    placeholder,
  }: FieldPropsType) => (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <input
        data-testid="custom-input"
        {...(id ? { id } : {})}
        onFocus={focus}
        onBlur={blur}
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

      {icon ? <Icon search={search} onClick={focus} /> : null}
    </div>
  )
);
Editable.displayName = 'Editable';

type DropdownWrapperPropsType = {
  dropdownRef: RefObject<HTMLDivElement>;
  children: ReactNode;
};

const DropdownWrapper = memo(
  ({ children, dropdownRef }: Partial<DropdownWrapperPropsType>) => (
    <div
      ref={dropdownRef}
      className="dropdown hidden min-w-max dropdown absolute text-center cursor-pointer mt-1 shadow top-[100%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
    >
      {children}
    </div>
  )
);
DropdownWrapper.displayName = 'DropdownWrapper';

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

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;
CustomField.Editable = Editable;
CustomField.NonEditable = NonEditable;

export default CustomField;
