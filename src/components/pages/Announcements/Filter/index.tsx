import { memo, useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import useFilter from '~components/reusables/hooks/useFilter';
import { capitalizeChar } from '~utils/format';

const testing = [
  'here',
  'lakd',
  'kdgjfksf',
  'bakfko',
  'giodsfsl',
  'sdkfjakdf',
  'qdooaldkf',
  'ksdadkfjkdfj akfjsklajfkjkfsfoi',
];

const types = ['memo', 'single_event', 'multi_event'];

const FilterAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const { filter } = useFilter();
  const [classs, setClasss] = useState('');
  const [search, setSearch] = useCustomField<string>('');
  const [user, setUser] = useState<string[]>([]);
  const [names, setNames] = useState([...testing]);
  const [type, setType] = useCustomField<string>('');
  const [date, setDate, dateList, dateListFilterFn] = useCustomField<string>(
    '',
    testing
  );

  const addUser = (u: string) => {
    if (user.includes(u)) {
      setUser((use) => use.filter((us) => us !== u));
      return;
    }
    setUser([...user, u]);
  };

  const filterList = (val: string) => {
    setNames((prev) => prev.filter((v) => v.includes(val)));
  };

  const filterAnnouncements = () =>
    filter({ ...(search && { search }), ...(type && { type }) });

  return (
    <Modal
      size="sm"
      title="Filter Announcements"
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
              <CustomField onSelect={setType} field="select" value={type}>
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
            <BoldText>From Date:</BoldText>
            <div className="mt-1">
              <CustomField
                field="input"
                filterFn={dateListFilterFn}
                onChange={setDate}
                value={date}
                icon="caretDown"
              >
                <CustomField.DropdownWrapper>
                  {dateList.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Filter By:</BoldText>
            <div className="mt-1">
              <CustomField
                filterFn={filterList}
                onSelect={addUser}
                field="select"
                value={user}
              >
                <CustomField.DropdownWrapper>
                  {names.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Select Class:</BoldText>
            <div className="mt-1">
              <CustomField
                onSelect={(v) => setClasss(v)}
                field="select"
                value={classs}
              >
                <CustomField.DropdownWrapper>
                  {names.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
        </div>
      }
      action={filterAnnouncements}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(FilterAnnouncement);
