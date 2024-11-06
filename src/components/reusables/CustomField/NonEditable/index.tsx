import CancelIcon from '~src/assets/Icons/CancelIcon';
import Icon from '~src/assets/Icons';
import { useCustomFieldContext } from '../hooks-custom-field/useCustomFieldContext';
import { Tag } from '../../ui/Others';

const NonEditable = () => {
  const {
    onSelect,
    value,
    placeholder = 'Select...',
    error,
  } = useCustomFieldContext();
  const emptyValue = <span className="text-gray-400">{placeholder}</span>;

  return (
    <div
      className={`relative w-full cursor-pointer bg-white flex items-center border  ${
        error ? 'border-pink-800' : 'border-gray-200'
      }  rounded-lg overflow-hidden`}
    >
      <div
        data-testid="custom-select"
        tabIndex={0}
        className={` first-letter:uppercase appearance-none outline-none max-w-full cursor-pointer grow ${
          typeof value === 'string'
            ? 'p-2'
            : Array.isArray(value)
              ? 'flex gap-2 overflow-x-auto max-w-full p-2'
              : ''
        }`}
      >
        {(() => {
          if (Array.isArray(value)) {
            if (value.length) {
              return value.map((prop) => (
                <Tag onClick={() => onSelect?.(prop)} key={Math.random()}>
                  <div className="flex items-center">
                    <span className=" whitespace-nowrap pr-2">
                      {prop.split('_').join(' ')}
                    </span>
                    <CancelIcon width={16} height={16} strokeWidth={3} />
                  </div>
                </Tag>
              ));
            }
            return emptyValue;
          }
          if (typeof value === 'string' && value) {
            return value.split('_').join(' ');
          }
          return value || emptyValue;
        })()}
      </div>
      <span className=" mr-1">
        <Icon height={20} width={20} name="caretDown" />
      </span>
    </div>
  );
};
NonEditable.displayName = 'NonEditable';

export default NonEditable;
