import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field';
import useCustomField from 'components/reusables/custom-field/hooks-custom-field/useCustomField';

const StudentFilter = () => {
  const [classroom, setClassroom, classroomList] = useCustomField('', [
    'JSS-1',
    'JSS-2',
    'JSS-3',
    'SSS-1',
    'SSS-2',
    'SSS-3',
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

export default StudentFilter;
