import { useRef, useState } from 'react';

const useCustomField = <T extends string | string[]>(
  initialValue: T,
  dropDownist: string[]
) => {
  const list = useRef([...dropDownist]);
  const [value, updateValue] = useState(initialValue);
  const [filteredList, setFilteredList] = useState([...dropDownist]);

  const filterFn = (arg: string) => {
    setFilteredList(() =>
      list.current.filter((v) => v.toLowerCase().includes(arg.toLowerCase()))
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
          (prev as unknown as string[]).filter(
            (state) =>
              (state as string).toLowerCase() !== (v as string).toLowerCase()
          ) as T
      );
      return;
    }
    updateValue((prev: T) => [...prev, v] as T);
  };

  return [value, setValue, filteredList, filterFn] as const;
};

export default useCustomField;
