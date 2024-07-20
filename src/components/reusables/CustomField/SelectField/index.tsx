import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Icon from '~assets/Icons';
import { Tag } from '~components/reusables/ui/Others';
import Dropdown from '../DropdownWrapper/Dropdown';

type TSelectField = {
  dropdownElement?: (value: string | number) => JSX.Element;
  width?: number;
  loading?: boolean;
  error?: boolean;
  placeholder?: string;
  list: (string | number)[] | { [key: string | number]: string | number };
} & (
  | { value: string; onSelect: (e: string) => void }
  | { value: number; onSelect: (e: number) => void }
  | { value: number[]; onSelect: (e: number[]) => void }
  | { value: string[]; onSelect: (e: string[]) => void }
);

const SelectField = ({
  value,
  width,
  loading,
  error,
  onSelect,
  placeholder,
  list,
  dropdownElement,
}: TSelectField) => {
  const elementRef = useRef<HTMLDivElement | HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggle = useRef(false);
  const multiselect = Array.isArray(value);
  const isListArray = Array.isArray(list);
  const listRef = useRef<(string | number)[]>([]);
  const [filteredList, setFilteredList] = useState(listRef.current);
  const [search, setSearch] = useState('');

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
      toggle.current = false;
    }
  }, []);

  const toggleDropdown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
      if (elementRef.current?.contains(e.target as Node) && toggle.current) {
        focus();
      } else blur();
    },
    [blur, focus]
  );

  useEffect(() => {
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

  useEffect(() => {
    document.addEventListener('click', toggleDropdown);
    return () => {
      document.removeEventListener('click', toggleDropdown);
    };
  }, []);

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

  const content = dropdownElement || ((arg: string | number) => arg);

  return (
    <div
      className="flex h-full relative"
      ref={elementRef}
      onClick={(e) => {
        if (!multiselect) {
          toggle.current = !toggle.current;
          return;
        }
        if (dropdownRef.current?.contains(e.target as Node)) {
          toggle.current = false;
        } else toggle.current = true;
      }}
    >
      <div
        className={`relative w-full cursor-pointer bg-white flex items-center border  ${
          error ? 'border-pink-800' : 'border-gray-200'
        }  rounded-lg overflow-hidden`}
      >
        <div
          data-testid="custom-select"
          tabIndex={0}
          className={` first-letter:uppercase appearance-none outline-none max-w-full cursor-pointer grow ${
            multiselect ? 'flex gap-2 overflow-x-auto max-w-full p-2' : 'p-2'
          }`}
        >
          {multiselect &&
            (value.length
              ? value.map((prop) => (
                  <Tag onClick={() => handleSelect(prop)} key={Math.random()}>
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

      <div
        ref={dropdownRef}
        onClick={(e) => multiselect && e.stopPropagation()}
        className="dropdown hidden min-w-max dropdown absolute text-center shadow border cursor-pointer mt-2 top-[90%] z-20 w-full rounded-lg max-h-[300px] overflow-y-auto"
        style={{ minWidth: width || 'max-content' }}
      >
        {!!listRef.current.length && (
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
    </div>
  );
};

export default memo(SelectField);
