import { memo, useState } from 'react';
import CustomField from 'components/reusables/custom-field';
import { BoldText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import Modal from 'components/reusables/modal';
import useCustomField from 'components/reusables/custom-field/hooks-custom-field/useCustomField';
import RequestCard from '../../../reusables/request-card';
import NewRequest from './new-request';

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

const Filter = () => {
  const [classs, setClasss] = useState('');
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
    <>
      <div>
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
    </>
  );
};

const Requests = () => {
  const [modal, setModal] = useState('');
  const [classs, setClasss] = useState('');
  const [user, setUser] = useState<string[]>([]);
  const [names, setNames] = useState([...testing]);
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    testing
  );
  const [date, setDate, dateList, dateListFilterFn] = useCustomField<string>(
    '',
    [...testing]
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
    <div className="flex  flex-col md:h-full md:overflow-hidden">
      {modal === 'newRequest' && (
        <Modal
          title="New Request"
          content={<NewRequest />}
          close={() => setModal('')}
        />
      )}
      {modal === 'filter' && (
        <Modal
          title="Filter Requests"
          content={<Filter />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
      <div className="flex flex-wrap gap-8 gap-y-4 mt-8">
        <div>
          <BoldText>Filter By:</BoldText>
          <div className="mt-1">
            <CustomField onChange={setDate} field="date" value={date} />
          </div>
        </div>

        <div>
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
        <div>
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
        <div>
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
        <div className="w-[150px]">
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
        <div className="self-end">
          <ActionBtn
            onClick={() => setModal('filter')}
            className="px-4 py-2 text-purple.dark hover:opacity-50"
          >
            Filter Requests
          </ActionBtn>
          <ActionBtn
            onClick={() => setModal('newRequest')}
            className="px-4 py-2 text-purple.dark hover:opacity-50"
          >
            New Request
          </ActionBtn>
        </div>
      </div>
      <div className="mt-6 pb-8 grow md:h-auto overflow-auto">
        <div className="mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
      </div>
    </div>
  );
};

export default memo(Requests);
