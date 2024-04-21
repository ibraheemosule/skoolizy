import { memo } from 'react';
import UsersListLayout from 'components/reusables/users-list-layout/UsersListLayout';
import TeachersList from './teachers-list/TeachersList';
import TeachersFilter from './teachers-filter/TeachersFilter';

const Teachers = () => (
  <UsersListLayout
    type="teachers"
    List={TeachersList}
    Filter={TeachersFilter}
  />
);

export default memo(Teachers);
