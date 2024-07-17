import Icon from '~src/assets/Icons';
import { useCustomFieldContext } from '../hooks-custom-field/useCustomFieldContext';

const Editable = () => {
  const {
    onChange,
    filterFn,
    value,
    type,
    id,
    search,
    placeholder,
    pattern,
    error,
    icon = filterFn ? 'caretDown' : 'search',
  } = useCustomFieldContext();

  const isDate = ['month', 'week', 'date', 'time'].includes(type || '');
  const styles =
    'p-2 pl-4 first-letter:uppercase appearance-none outline-none w-full';

  return (
    <div
      className={`w-full cursor-pointer bg-white flex items-center border ${
        error ? 'border-pink-800' : 'border-gray-200'
      }  rounded-lg overflow-hidden`}
    >
      <input
        {...(pattern && { pattern })}
        data-testid="custom-input"
        {...(id && { id })}
        autoComplete="true"
        onChange={(e) => {
          onChange?.(e.target.value);
          filterFn?.(e.target.value);
        }}
        onBlur={(e) => filterFn?.(e.target.value, onChange)}
        value={value as string}
        type={type ?? (search ? 'search' : 'text')}
        placeholder={placeholder || 'Search...'}
        className={`${styles} ${isDate} ${
          !search && typeof search === 'boolean'
            ? 'cursor-pointer'
            : 'cursor-text'
        }`}
      />
      {icon && !isDate && (
        <button className=" mr-1">
          <Icon height={20} width={20} name={icon} />
        </button>
      )}
    </div>
  );
};
Editable.displayName = 'Editable';

export default Editable;
