import { useState } from 'react';

const useCustomFieldWithFilter = <T extends string | string[]>(
  initialValue: T,
  list: string[]
) => {
  const [value, updateValue] = useState(initialValue);
  const [filteredList, setFilteredList] = useState(list);

  const filterFn = (arg: string) => {
    console.log(arg, 'here');
    setFilteredList(() =>
      list.filter((v) => v.toLowerCase().includes(arg.toLowerCase()))
    );
  };

  const setValue = (v: string | string[]) => {
    if (typeof value === 'string') {
      updateValue(v as T);
      return;
    }
    if (value.includes(v as string)) {
      updateValue(
        (prev) =>
          (prev as unknown as string[]).filter((v) =>
            (v as string)
              .toLowerCase()
              .includes((value as unknown as string).toLowerCase())
          ) as T
      );
    }
    updateValue((prev: T) => [...prev, v] as T);
  };

  return [value, setValue, filteredList, filterFn] as const;
};

export default useCustomFieldWithFilter;
