import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import { capitalizeChar } from '~utils/format';

const nums = Array(365)
  .fill('')
  .map((_, i) => String(i));

const types = ['memo', 'single_event', 'multi_event'];

type TFilterAnnouncement = {
  action: (arg: { [key: string]: string | number }) => void;
  closeModal: () => void;
};

const FilterAnnouncement = ({ closeModal, action }: TFilterAnnouncement) => {
  const state = useLocation().state ?? {};
  const [search, setSearch] = useCustomField<string>(state.search || '');
  const [type, setType] = useCustomField<string>(state.type || '');
  const [fromDate, setFromDate] = useCustomField(state.from_date || '');
  const [toDate, setToDate] = useCustomField(state.to_date || '');
  const [days, setDays, daysList, daysListFilterFn] = useCustomField<string>(
    state.event_days || '',
    nums
  );

  const filterAnnouncements = () => {
    action({
      search,
      type,
      event_days: days,
      from_date: fromDate,
      to_date: toDate,
    });
    closeModal();
  };

  return (
    <Modal
      size="sm"
      title="Filter Announcements"
      fixedActionBtn
      content={
        <div data-testid="filter-annouoncement-modal">
          <div>
            <BoldText>Search Title:</BoldText>
            <div className="mt-1">
              <CustomField onChange={setSearch} field="input" value={search} />
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Announcement Type:</BoldText>
            <div className="mt-1">
              <CustomField
                onSelect={setType}
                field="select"
                value={type}
                placeholder="search..."
              >
                <CustomField.DropdownWrapper>
                  {types.map((t) => (
                    <CustomField.Dropdown key={t} value={t}>
                      {capitalizeChar(t)}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Event days:</BoldText>
            <div className="mt-1">
              <CustomField
                field="input"
                placeholder="Select event duration range..."
                filterFn={daysListFilterFn}
                onChange={setDays}
                value={days}
                icon="caretDown"
              >
                <CustomField.DropdownWrapper>
                  {daysList.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Date range from:</BoldText>
            <div className="mt-1">
              <CustomField
                type="date"
                onChange={setFromDate}
                field="input"
                value={fromDate}
                id="announcement-date-range-from"
              />
            </div>
          </div>
          {fromDate && (
            <div className="mt-4">
              <BoldText>Date range to (Optional):</BoldText>
              <div className="mt-1">
                <CustomField
                  type="date"
                  onChange={setToDate}
                  field="input"
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
