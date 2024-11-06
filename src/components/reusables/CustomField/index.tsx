/* eslint-disable react/destructuring-assignment */
import {
  useRef,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
  Children,
  isValidElement,
  FC,
} from 'react';
import { DateTimePicker } from 'react-datetime-picker';
import { TCustomField } from './t-customField';

import { CustomFieldContext } from './hooks-custom-field/useCustomFieldContext';

import Editable from './Editable';
import NonEditable from './NonEditable';
import Dropdown from './DropdownWrapper/Dropdown';
import DropdownWrapper from './DropdownWrapper';

const CustomField = (props: TCustomField) => {
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
      error: props.error,
      ...(props.field === 'select'
        ? {
            onSelect: props.onSelect,
            filterFn: props.filterFn,
          }
        : {
            search: props.search,
            pattern: props.pattern,
            type: props.field === 'date' ? 'date' : props.type,
            id: props.id,
            icon: props.icon,
            onChange: props.onChange,
            ...(props.children && { filterFn: props.filterFn }),
          }),
    }),
    [props.value, props.filterFn, props.placeholder, props.error]
  );

  useEffect(() => {
    if (toggleDropdown.current) props.onBlur?.();
  }, [props.value]);

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
        {...(props.onBlur && {
          onBlur: () => {
            if (props.field === 'select') {
              if (!dropdownRef.current) props.onBlur?.();
            } else props.onBlur?.();
          },
        })}
      >
        {['input', 'date'].includes(props.field) && <Editable />}
        {props.field === 'date-time' && (
          <div className="w-full" ref={dropdownRef}>
            <DateTimePicker
              className={props.error ? 'error' : ''}
              format="dd/MM/yyyy"
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              calendarIcon={null}
              onChange={props.onChange}
              value={props.value}
              disabled={props.disabled}
            />
          </div>
        )}
        {props.field === 'select' && <NonEditable />}

        {props.children}
        {props.error && (
          <small className="text-pink-800 absolute -bottom-6 left-0 first-letter:capitalize">
            {props.error}
          </small>
        )}
      </div>
    </CustomFieldContext.Provider>
  );
};

CustomField.DropdownWrapper = DropdownWrapper;
CustomField.Dropdown = Dropdown;

export default CustomField;
