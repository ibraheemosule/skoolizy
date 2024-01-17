import { memo, useState } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';
import { ActionBtn, DeleteBtn } from 'components/reusables/ui/buttons';

const topHeader = [
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

  return edit ? (
    <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
      <div>
        <BoldText>Classroom:</BoldText>
        <div className="mt-1">
          <CustomField>
            <>
              <CustomField.NonEditable>JSS-1</CustomField.NonEditable>
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>JSS-1</CustomField.Dropdown>
                <CustomField.Dropdown>JSS-2</CustomField.Dropdown>
                <CustomField.Dropdown>JSS-3</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-1</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-2</CustomField.Dropdown>
                <CustomField.Dropdown>SSS-3</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
      </div>
      <div>
        <BoldText>Time:</BoldText>
        <div className="mt-1">
          <CustomField>
            <>
              <CustomField.NonEditable>Unset</CustomField.NonEditable>
              <CustomField.DropdownWrapper>
                {topHeader.map((t) => (
                  <CustomField.Dropdown key={Math.random()}>
                    {t}
                  </CustomField.Dropdown>
                ))}
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
      </div>
      <div>
        <BoldText>Subject:</BoldText>
        <div className="mt-1">
          <CustomField>
            <>
              <CustomField.NonEditable>Unset</CustomField.NonEditable>
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>Math</CustomField.Dropdown>
                <CustomField.Dropdown>English</CustomField.Dropdown>
                <CustomField.Dropdown>Physics</CustomField.Dropdown>
                <CustomField.Dropdown>Chemistry</CustomField.Dropdown>
                <CustomField.Dropdown>Agric</CustomField.Dropdown>
                <CustomField.Dropdown>Biology</CustomField.Dropdown>
                <CustomField.Dropdown>Further Math</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
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
          Edit Timetable
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
