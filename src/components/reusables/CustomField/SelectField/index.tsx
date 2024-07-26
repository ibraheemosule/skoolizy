import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from '~assets/Icons';
import { Tag } from '~components/reusables/ui/Others';
import Dropdown from '../DropdownWrapper/Dropdown';

type TSelectField = {
  dropdownElement?: (value: string | number) => JSX.Element;
  width?: number;
  loading?: boolean;
  error?: string;
  placeholder?: string;
  onBlur?: () => void;
  disabled?: boolean;
  list: (string | number)[] | { [key: string | number]: string | number };
} & (
  | { value: string; onSelect: (e: string) => void }
  | { value: number; onSelect: (e: number) => void }
  | { value: number[]; onSelect: (e: number[]) => void }
  | { value: string[]; onSelect: (e: string[]) => void }
);

type TDropdownWrapper = {
  dropdownElement?: (value: string | number) => JSX.Element;
  width?: number;
  loading?: boolean;
  toggle: boolean;
  error?: string;
  list: (string | number)[] | { [key: string | number]: string | number };
  handleSelect: (arg: string | number) => void;
  value: string | number | number[] | string[];
  onBlur?: () => void;
};

const DropdownWrapper = ({
  value,
  width,
  loading,
  list,
  dropdownElement,
  toggle,
  handleSelect,
  onBlur,
  error,
}: TDropdownWrapper) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const multiselect = Array.isArray(value);
  const isListArray = Array.isArray(list);
  const listRef = useRef<(string | number)[]>([]);
  const [filteredList, setFilteredList] = useState(listRef.current);
  const [search, setSearch] = useState('');
  const valueRef = useRef<string>('');

  valueRef.current = (
    typeof value === 'number' ? String(value) : value
  ) as string;

  useEffect(() => {
    if (error) onBlur?.();
    return () => {
      if (!valueRef.current.length) onBlur?.();
    };
  }, [value]);

  useLayoutEffect(() => {
    listRef.current = isListArray ? list : Object.keys(list);
    setFilteredList(listRef.current);
  }, [list]);

  useEffect(() => {
    setFilteredList(
      listRef.current.filter((v) =>
        String(v).toLowerCase().startsWith(search.toLowerCase())
      )
    );
  }, [search]);

  const content = dropdownElement || ((arg: string | number) => arg);

  return toggle ? (
    <div
      ref={dropdownRef}
      onClick={(e) => multiselect && e.stopPropagation()}
      className={`dropdown ${
        toggle ? '' : 'hidden'
      } min-w-max dropdown absolute text-center shadow border cursor-pointer mt-2 top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto`}
      style={{ minWidth: width || 'max-content' }}
    >
      {listRef.current?.length > 10 && (
        <Dropdown value={null}>
          <div
            className="pt-2 pb-4 px-1 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="dropdown-search w-full rounded-md p-3 outline-none border-0 bg-gray-100"
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
      ) : filteredList?.length ? (
        filteredList.map((v: string | number) => (
          <Dropdown
            key={v}
            value={v}
            fieldValue={value}
            onSelect={handleSelect}
          >
            {content(isListArray ? v : list[v])}
          </Dropdown>
        ))
      ) : (
        !!list.length && (
          <div className="pt-1 pb-3 px-1 bg-white"> No Result</div>
        )
      )}
    </div>
  ) : null;
};

const SelectField = ({
  value,
  width,
  loading,
  error,
  onSelect,
  placeholder,
  list,
  dropdownElement,
  onBlur,
  disabled,
}: TSelectField) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false);
  const multiselect = Array.isArray(value);

  const toggleDropdown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    if (disabled) return;
    if (!elementRef.current?.contains(e.target as Node)) {
      setToggle(false);
      return;
    }

    if (multiselect) {
      setToggle(true);
    } else {
      setToggle((val) => !val);
    }
  };

  useEffect(() => {
    document.addEventListener('click', toggleDropdown);
    return () => {
      document.removeEventListener('click', toggleDropdown);
    };
  }, [disabled]);

  const emptyValue = (
    <span className="text-gray-400">{placeholder || 'Select..'}</span>
  );

  const handleSelect = (arg: string | number) => {
    if (multiselect) {
      const itemInState = value.find((item) => String(item) === String(arg));

      (onSelect as (e: (string | number)[]) => void)(
        itemInState
          ? value.filter((item) => String(item) !== String(arg))
          : [...value, arg]
      );
      return;
    }
    (onSelect as (e: string | number) => void)(arg);
  };

  return (
    <div className="flex h-full relative" ref={elementRef}>
      <div
        className={`relative w-full  ${
          disabled ? 'bg-gray-200' : 'bg-white cursor-pointer'
        } 
       flex items-center border  ${
         error ? 'border-pink-800' : 'border-gray-200'
       }  rounded-lg overflow-hidden`}
      >
        <div
          data-testid="custom-select"
          tabIndex={0}
          className={` first-letter:uppercase appearance-none outline-none max-w-full grow ${
            multiselect ? 'flex gap-2 overflow-x-auto max-w-full p-2' : 'p-2'
          }`}
        >
          {multiselect &&
            (value.length
              ? value.map((prop) => (
                  <Tag
                    onClick={() => toggle && handleSelect(prop)}
                    key={Math.random()}
                  >
                    <div className="flex items-center">
                      <span className=" whitespace-nowrap pr-2">
                        {String(prop).split('_').join(' ')}
                      </span>
                      <Icon
                        name="cancel"
                        width={16}
                        height={16}
                        strokeWidth={3}
                      />
                    </div>
                  </Tag>
                ))
              : emptyValue)}

          {!multiselect && (String(value)?.split('_').join(' ') || emptyValue)}
        </div>
        <span className=" mr-1">
          <Icon height={20} width={20} name="caretDown" />
        </span>
      </div>

      {list && toggle && (
        <DropdownWrapper
          list={list}
          toggle={toggle}
          dropdownElement={dropdownElement}
          width={width}
          loading={loading}
          handleSelect={handleSelect}
          value={value}
          onBlur={onBlur}
          error={error}
        />
      )}
      {error && (
        <small className="text-pink-800 absolute -bottom-6 left-0 first-letter:capitalize">
          {error}
        </small>
      )}
    </div>
  );
};

export default memo(SelectField);
