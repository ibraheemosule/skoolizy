import { memo } from 'react';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import { BoldText } from '~reusables/ui/Text';

const FilterGuardians = ({ closeModal }: { closeModal: () => void }) => {
  const [subject, setSubject, subjectList] = useCustomField('', [
    'English',
    'Math',
    'Biology',
  ]);
  const [gender, setGender] = useCustomField('');
  const [year, setYear] = useCustomField('');
  const [rating, setRating, ratingRange] = useCustomField('', [
    '0 > 1',
    '1 > 2',
    '2  > 3',
    '3 > 4',
    '4 > 5',
  ]);

  return (
    <Modal
      size="sm"
      title="Filter Guardians By"
      content={
        <div className="text-left mb-4">
          <div>
            <BoldText className="mt-4">Subject:</BoldText>
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
          <div className="mt-4">
            <BoldText>Gender:</BoldText>
            <div className="mt-1">
              <CustomField value={gender} onSelect={setGender} field="select">
                <CustomField.DropdownWrapper>
                  <CustomField.Dropdown value="male">Male</CustomField.Dropdown>
                  <CustomField.Dropdown value="female">
                    Female
                  </CustomField.Dropdown>
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Year Joined:</BoldText>
            <div className="mt-1">
              <CustomField
                type="month"
                onChange={setYear}
                field="input"
                value={year}
              />
            </div>
          </div>

          <div className="mt-4 pb-4">
            <BoldText>Ratings:</BoldText>
            <div className="mt-1">
              <CustomField value={rating} onSelect={setRating} field="select">
                <CustomField.DropdownWrapper>
                  {ratingRange.map((rating) => (
                    <CustomField.Dropdown value={rating} key={rating}>
                      {rating}
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

export default memo(FilterGuardians);
