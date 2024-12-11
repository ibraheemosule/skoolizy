import { NavLink } from 'react-router-dom';

const SubjectList = () => (
  <nav className="classrooms-nav  mt-8 flex border-b overflow-x-auto border-gray-300 gap-4">
    <NavLink className="p-1 horizontal-nav shrink-0" to="topics">
      Topics
    </NavLink>
    <NavLink className="p-1 horizontal-nav shrink-0" to="staffs">
      Staffs
    </NavLink>
  </nav>
);

export default SubjectList;
