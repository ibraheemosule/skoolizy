import SideHeaderTable from 'components/reusables/custom-table/SideHeaderTable';
import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';
import { ActionBtn } from 'components/reusables/ui/buttons';

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

const content = {
  Monday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Tuesday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Wednesday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Thursday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Friday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],
};

const TimeTable = () => (
  <>
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
              <CustomField.NonEditable>10</CustomField.NonEditable>
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>20</CustomField.Dropdown>
                <CustomField.Dropdown>30</CustomField.Dropdown>
                <CustomField.Dropdown>40</CustomField.Dropdown>
                <CustomField.Dropdown>50</CustomField.Dropdown>
                <CustomField.Dropdown>60</CustomField.Dropdown>
                <CustomField.Dropdown>70</CustomField.Dropdown>
                <CustomField.Dropdown>80</CustomField.Dropdown>
                <CustomField.Dropdown>90</CustomField.Dropdown>
                <CustomField.Dropdown>100</CustomField.Dropdown>
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
      <ActionBtn className="self-end xl:ml-auto py-2 px-3 border">
        Edit Timetable
      </ActionBtn>
    </div>
    <div className="mt-6">
      <SideHeaderTable topHeaders={topHeader} content={content} />
    </div>
  </>
);

export default memo(TimeTable);
