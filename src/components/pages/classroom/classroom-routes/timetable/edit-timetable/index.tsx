import { memo, useState } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field';
import { ActionBtn, DeleteBtn } from 'components/reusables/ui/buttons';
import useCustomField from 'components/reusables/custom-field/hooks-custom-field/useCustomField';

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
  const [classroom, setClassroom, classroomList] = useCustomField('', [
    'JSS-1',
    'JSS-2',
    'JSS-3',
    'SSS-1',
    'SSS-2',
    'SSS-3',
  ]);
  const [subject, setSubject, subjectList] = useCustomField('', [
    'English',
    'Math',
    'Biology',
  ]);

  const [period, setPeriod] = useCustomField('');

  return edit ? (
    <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
      <div>
        <BoldText>Classroom:</BoldText>
        <div className="mt-1">
          <CustomField value={classroom} onSelect={setClassroom} field="select">
            <CustomField.DropdownWrapper>
              {classroomList.map((sub) => (
                <CustomField.Dropdown key={sub} value={sub}>
                  {sub}
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
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
        <DeleteBtn
          onClick={() => setEdit(false)}
          className="self-end xl:ml-auto py-2 px-3 border"
        >
          Cancel
        </DeleteBtn>
        <ActionBtn
          onClick={() => setEdit(false)}
          className="self-end xl:ml-auto py-2 px-3 border"
        >
          Update Timetable
        </ActionBtn>
      </div>
    </div>
  ) : (
    <div className="text-right">
      <ActionBtn onClick={() => setEdit(true)} className="py-2 px-3 border">
        Edit Timetable
      </ActionBtn>
    </div>
  );
};

export default memo(TimeTable);
