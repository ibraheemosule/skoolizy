import { useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import CustomField from '~reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const periodList = [
  '8-9',
  '9-10',
  '10-11',
  '11-12',
  'break',
  '12-1',
  '1-2',
  '2-3',
  '3-4',
];

const TimeTable = () => {
  const [edit, setEdit] = useState(false);
  const [subject, setSubject, subjectList] = useCustomField('', [
    'English',
    'Math',
    'Biology',
  ]);

  const [period, setPeriod] = useCustomField('');

  return edit ? (
    <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
      <div>
        <BoldText>Period:</BoldText>
        <div className="mt-1">
          <CustomField value={period} onSelect={setPeriod} field="select">
            <CustomField.DropdownWrapper>
              {periodList.map((sub) => (
                <CustomField.Dropdown key={sub} value={sub}>
                  {sub}
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
      <div>
        <BoldText>Subject:</BoldText>
        <div className="mt-1">
          <CustomField value={subject} onSelect={setSubject} field="select">
            <CustomField.DropdownWrapper>
              {subjectList.map((sub) => (
                <CustomField.Dropdown key={sub} value={sub}>
                  {sub}
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
      <div className="flex gap-6 self-end xl:ml-auto">
        <div className="self-end xl:ml-auto">
          <ActionBtn onClick={() => setEdit(false)} className="bg-white border">
            <span className="text-gray-700 font-semibold">Cancel</span>
          </ActionBtn>
        </div>
        <div className="self-end xl:ml-auto">
          <ActionBtn
            className="border-purple.dark border"
            onClick={() => setEdit(false)}
          >
            Update Timetable
          </ActionBtn>
        </div>
      </div>
    </div>
  ) : (
    <div className="ml-auto w-40">
      <ActionBtn onClick={() => setEdit(true)}>Edit Timetable</ActionBtn>
    </div>
  );
};

export default TimeTable;
