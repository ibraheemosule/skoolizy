import { BoldText } from '~reusables/ui/Text';
import CustomField from '~components/reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import ScoreBoard from './ScoreBoard';

const RecordGrade = () => {
  const [subject, setSubject, subjectList] = useCustomField('', [
    'English',
    'Math',
    'Biology',
  ]);

  const [grade, setGrade] = useCustomField('');

  return (
    <section className="flex flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
      <div className="w-full shrink-0 overflow-auto">
        <div className="flex justify-start flex-wrap gap-x-8 gap-y-4">
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
      </div>
    </section>
  );
};

export default RecordGrade;
