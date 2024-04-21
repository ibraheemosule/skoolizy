import { useRef, useState } from 'react';

/**
 * @param {string | string []} initialValue  The initial value of the input field
 * which can be a string or an array for multiple select option
 * @param {string[]} dropdownList an array of strings for the dropdown commponents,
 * this should be passed if the dropdownList needs to be filtered based on what
 * is being typed in the input field of the customfield
 * @returns {[value, setValue, filteredList, filterFn]} This custom hook returns
 * value -  This is what is to be passed to the customField value prop
 * setValue - This is what updates the value, it should be passed to the onChange
 * or onSelect Prop of the customField
 * filteredList -  this is the list that should be used to map the Dropdown component
 * if you want the dropdown to be filterable
 * filterFn -  this is the function that handles the filtering of the list. It should
 * be passed to the filterFn prop of the customField
 */

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
