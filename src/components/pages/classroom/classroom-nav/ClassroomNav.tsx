import { memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';

const Hero = () => (
  <div className="mb-8">
    <div className="max-w-[150px]">
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
    <nav className="classrooms-nav  mt-8 flex border-b overflow-x-auto border-gray-300 gap-4">
      <NavLink className="p-1 classroom-nav shrink-0" to="stats">
        Stats
      </NavLink>

      <NavLink className="p-1 classroom-nav shrink-0" to="timetable">
        TimeTable
      </NavLink>
    </nav>
  </div>
);

export default memo(Hero);
