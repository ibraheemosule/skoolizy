import { BoldText } from '~reusables/ui/Text';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import { HorizontalNav } from '~components/reusables/Menu';

const nav = {
  Stats: 'stats',
  Timetable: 'timetable',
  'Record Grade': 'record-grade',
  Performace: 'performance',
};

const ClassroomList = () => {
  const [classroom, setClassroom, classroomList] = useCustomField('', [
    'JSS-1',
    'JSS-2',
    'JSS-3',
    'SSS-1',
    'SSS-2',
    'SSS-3',
  ]);

  return (
    <>
      <div className="max-w-[150px]">
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
      <div className="mt-8">
        <HorizontalNav nav={nav} />
      </div>
    </>
  );
};

export default ClassroomList;
