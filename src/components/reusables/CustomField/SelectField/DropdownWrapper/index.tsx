import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from '~assets/Icons';
import Dropdown from '../../DropdownWrapper/Dropdown';

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
      } min-w-max dropdown absolute text-center shadow border cursor-pointer mt-2 top-[90%] z-20 w-full rounded-lg`}
      style={{ minWidth: width || 'max-content' }}
    >
      {listRef.current?.length > 10 && (
        <div
          className="pt-2 pb-4 px-1 bg-white relative"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="dropdown-search w-full rounded-md p-3 outline-none border-0 bg-gray-100 pl-8"
          />
          <span className="absolute left-3 top-1/2 -translate-y-2/3">
            <Icon name="search" height={18} width={18} stroke="#9ca3af" />
          </span>
        </div>
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
        <div className="max-h-[300px]  overflow-y-auto">
          {filteredList.map((v: string | number) => (
            <Dropdown
              key={v}
              value={v}
              fieldValue={value}
              onSelect={handleSelect}
            >
              {content(isListArray ? v : list[v])}
            </Dropdown>
          ))}
        </div>
      ) : (
        !!list.length && (
          <div className="pt-1 pb-3 px-1 bg-white"> No Result</div>
        )
      )}
    </div>
  ) : null;
};

export default memo(DropdownWrapper);
