import { memo, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useLocation } from 'react-router-dom';
import SelectField from '~components/reusables/CustomField/SelectField';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import { BoldText } from '~reusables/ui/Text';
import { capCharRemoveUnderscore, dateToDbFormat } from '~utils';

const nums = Array(366)
  .fill('')
  .map((_, i) => i)
  .slice(1);

const types = ['memo', 'single_event', 'multi_event'];

const announcementTypeDropdown = (val: string | number) => (
  <div className="py-2">{capCharRemoveUnderscore(String(val))}</div>
);

const eventDaysDropdown = (val: string | number) => (
  <div className="py-3">
    {val} Day{+val > 1 && 's'}
  </div>
);

const selectedEventDaysElement = (val: string | number) => (
  <span>
    {val} Day{+val > 1 && 's'}
  </span>
);

type TFilterAnnouncement = {
  action: (arg: { [key: string]: string | number }) => void;
  closeModal: () => void;
};

const FilterAnnouncement = ({ closeModal, action }: TFilterAnnouncement) => {
  const state = useLocation().state ?? {};
  const [search, setSearch] = useCustomField<string>(state.search || '');
  const [type, setType] = useState<string>(state.announcement_type || '');
  const [fromDate, setFromDate] = useState<Date | null>(
    state.from_date ? new Date(state.from_date) : null
  );
  const [toDate, setToDate] = useState<Date | null>(
    state.to_date ? new Date(state.to_date) : null
  );
  const [days, setDays] = useState<string>(state.event_days || '');

  const filterAnnouncements = () => {
    action({
      search,
      announcement_type: type,
      event_days: days,
      from_date: dateToDbFormat(fromDate) || '',
      to_date: dateToDbFormat(toDate) || '',
    });
    closeModal();
  };

  return (
    <Modal
      size="sm"
      title="Filter Announcements"
      fixedActionBtn
      content={
        <div className="mt-6" data-testid="filter-annouoncement-modal">
          <div>
            <BoldText>Search Title:</BoldText>
            <div className="mt-1">
              <CustomField onChange={setSearch} field="input" value={search} />
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Announcement Type:</BoldText>
            <div className="mt-1">
              <SelectField
                list={types}
                value={type}
                onSelect={setType}
                dropdownElement={announcementTypeDropdown}
              />
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Event duration (days):</BoldText>
            <div className="mt-1">
              <SelectField
                list={nums}
                value={days}
                onSelect={setDays}
                dropdownElement={eventDaysDropdown}
                selectedElement={selectedEventDaysElement}
              />
            </div>
          </div>
          <div className="my-4">
            <BoldText>Date range from:</BoldText>
            <div className="mt-1">
              <DateTimePicker
                format="dd/MM/yyyy"
                dayPlaceholder="DD"
                monthPlaceholder="MM"
                yearPlaceholder="YYYY"
                calendarIcon={null}
                onChange={(arg: Date | null) => setFromDate(arg)}
                value={fromDate}
              />
            </div>
          </div>
          {fromDate && (
            <div className="my-4">
              <BoldText>Date range to (Optional):</BoldText>
              <div className="mt-1">
                <DateTimePicker
                  format="dd/MM/yyyy"
                  minDate={fromDate}
                  dayPlaceholder="DD"
                  monthPlaceholder="MM"
                  yearPlaceholder="YYYY"
                  calendarIcon={null}
                  onChange={(arg: Date | null) => setToDate(arg)}
                  value={toDate}
                />
              </div>
            </div>
          )}
        </div>
      }
      action={filterAnnouncements}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(FilterAnnouncement);
