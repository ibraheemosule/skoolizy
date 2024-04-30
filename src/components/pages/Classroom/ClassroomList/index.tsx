import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { BoldText } from '~reusables/ui/Text';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

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
      <nav className="classrooms-nav  mt-8 flex border-b overflow-x-auto border-gray-300 gap-4">
        <NavLink className="p-1 horizontal-nav shrink-0" to="stats">
          Stats
        </NavLink>

        <NavLink className="p-1 horizontal-nav shrink-0" to="timetable">
          TimeTable
        </NavLink>
        <NavLink className="p-1 horizontal-nav shrink-0" to="record-grade">
          Record Grade
        </NavLink>
      </nav>
    </>
  );
};

export default ClassroomList;
