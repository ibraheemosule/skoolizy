import { memo, useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

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

const FilterAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const [classs, setClasss] = useState('');
  const [search, setSearch] = useCustomField('');
  const [user, setUser] = useState<string[]>([]);
  const [names, setNames] = useState([...testing]);
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    testing
  );
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

  return (
    <Modal
      size="sm"
      title="Filter Announcements"
      content={
        <div data-testid="filter-annouoncement-modal">
          <div>
            <BoldText>Search Keyword:</BoldText>
            <div className="mt-1">
              <CustomField onChange={setSearch} field="input" value={search} />
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Filter By:</BoldText>
            <div className="mt-1">
              <CustomField
                filterFn={filterFn}
                onSelect={setValue}
                field="select"
                value={value}
              >
                <CustomField.DropdownWrapper>
                  {list.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
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
      action={() => null}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(FilterAnnouncement);
