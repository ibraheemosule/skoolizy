import { DateTimePicker, DateTimePickerProps } from 'react-datetime-picker';

const DateTimeField = ({
  error,
  ...props
}: DateTimePickerProps & { error?: string }) => (
  <div
    className={`flex h-full relative ${props.disabled ? '' : 'cursor-pointer'}`}
  >
    <DateTimePicker
      className={error ? 'error' : ''}
      format="dd/MM/yyyy"
      dayPlaceholder="DD"
      monthPlaceholder="MM"
      yearPlaceholder="YYYY"
      calendarIcon={null}
      clearIcon={null}
      {...props}
    />

    {error && (
      <small className="text-pink-800 absolute -bottom-6 left-0 first-letter:capitalize">
        {error}
      </small>
    )}
  </div>
);

export default DateTimeField;
