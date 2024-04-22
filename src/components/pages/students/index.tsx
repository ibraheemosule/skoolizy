import { memo } from 'react';
import UsersListLayout from 'components/reusables/users-list-layout/UsersListLayout';
import StudentsList from './students-list';
import StudentsFilter from './students-filter';

const Students = () => (
  <UsersListLayout
    type="students"
    List={StudentsList}
    Filter={StudentsFilter}
  />
);

export default memo(Students);
