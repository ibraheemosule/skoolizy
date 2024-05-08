import UsersListLayout from '~components/reusables/UsersListLayout';
import StudentsList from './StudentsList';
import StudentsFilter from './StudentsOptions';

const Students = () => (
  <UsersListLayout
    type="students"
    List={StudentsList}
    Filter={StudentsFilter}
  />
);

export default Students;
