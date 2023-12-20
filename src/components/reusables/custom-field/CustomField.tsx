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

type FieldPropsType = Partial<Omit<ChildProp, 'dropdownRef'>> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  children?: ReactNode;
  search?: boolean;
};

// props elementRef, focus, blur comes from the CustomField component above
const Field = memo(
  ({
    elementRef,
    focus,
    blur,
    onChange,
    value,
    children,
    search,
  }: FieldPropsType) => (
    <div className="relative w-full cursor-pointer bg-white flex items-center border border-gray-200 rounded-lg overflow-hidden">
      {onChange ? (
        <input
          onFocus={focus}
          onBlur={blur}
          onChange={onChange}
          value={value}
          ref={elementRef as RefObject<HTMLInputElement>}
          type={search ? 'search' : 'text'}
          placeholder="Select someone to rate"
          className={`p-2 pl-4 appearance-none outline-none w-full ${
            search ? 'cursor-text' : 'cursor-pointer'
          }`}
        />
      ) : (
        <div
          onClick={focus}
          onBlur={blur}
          tabIndex={0}
          ref={elementRef}
          className="p-2 pl-4 appearance-none outline-none w-full cursor-pointer"
        >
          {children}
        </div>
      )}
      <i onClick={focus} className="inline-block mr-2 fa fa-angle-down" />
    </div>
  )
);
Field.displayName = 'Field';

type DropdownWrapperPropsType = {
  dropdownRef: RefObject<HTMLDivElement>;
  children: ReactNode;
};

const DropdownWrapper = memo(
  ({ children, dropdownRef }: Partial<DropdownWrapperPropsType>) => (
    <div
      ref={dropdownRef}
      className="dropdown hidden dropdown absolute text-center cursor-pointer mt-1 shadow top-[100%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
    >
      {children}
    </div>
  )
);
DropdownWrapper.displayName = 'DropdownWrapper';

const Dropdown = memo(
  ({ children, onClick }: IBaseProp & { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className={`${
        typeof children === 'string' && 'p-3'
      } relative bg-white hover:bg-gray-100 hover:text-black border-gray-100 last:rounded-b-lg`}
    >
      {children}
    </div>
  )
);
Dropdown.displayName = 'Dropdown';

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;
CustomField.Field = Field;

export default CustomField;
