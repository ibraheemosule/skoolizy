import { memo } from 'react';
import UsersListLayout from 'components/reusables/users-list-layout';
import TeachersList from './teachers-list';
import TeachersFilter from './teachers-filter';

const Teachers = () => (
  <UsersListLayout
    type="teachers"
    List={TeachersList}
    Filter={TeachersFilter}
  />
);

export default memo(Teachers);
