import UsersListLayout from '~components/reusables/UsersListLayout';
import TeachersList from './TeachersList';
import TeachersFilter from './TeachersOptions';

const Teachers = () => (
  <UsersListLayout
    type="teachers"
    List={TeachersList}
    Filter={TeachersFilter}
  />
);

export default Teachers;
