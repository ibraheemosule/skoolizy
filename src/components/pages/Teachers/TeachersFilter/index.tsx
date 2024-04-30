import { memo } from 'react';
import { BoldText } from '~reusables/ui/Text';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const TeachersFilter = () => {
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
    <>
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
      <div>
        <BoldText>Gender:</BoldText>
        <div className="mt-1">
          <CustomField value={gender} onSelect={setGender} field="select">
            <CustomField.DropdownWrapper>
              <CustomField.Dropdown value="male">Male</CustomField.Dropdown>
              <CustomField.Dropdown value="female">Female</CustomField.Dropdown>
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
      <div>
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

      <div>
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
    </>
  );
};

export default memo(TeachersFilter);
