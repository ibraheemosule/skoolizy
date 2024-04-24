import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field';
import { ActionBtn } from 'components/reusables/ui/buttons';
import useCustomField from 'components/reusables/custom-field/hooks-custom-field/useCustomField';
import ScoreBoard from './score-board';

const RecordGrade = () => {
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

  const [grade, setGrade] = useCustomField('');

  return (
    <>
      <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
        <div>
          <BoldText>Class:</BoldText>
          <div className="mt-1">
            <CustomField
              value={classroom}
              onSelect={setClassroom}
              field="select"
            >
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
          <BoldText>Grade Limit:</BoldText>
          <div className="mt-1">
            <CustomField onSelect={setGrade} field="select" value={grade}>
              <CustomField.DropdownWrapper>
                {Array(10)
                  .fill('')
                  .map((_, i) => (
                    <CustomField.Dropdown
                      value={`${i + 1}0`}
                      key={Math.random()}
                    >
                      {`${i + 1}0`}
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
        <ActionBtn className="self-end xl:ml-auto py-2 px-3 border">
          Submit Grade
        </ActionBtn>
      </div>
      <div className="mt-8">
        <ScoreBoard />
      </div>
    </>
  );
};

export default memo(RecordGrade);
