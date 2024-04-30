import { memo } from 'react';
import UsersListLayout from '~components/reusables/UsersListLayout';
import StudentsList from './StudentsList';
import StudentsFilter from './StudentsFilter';

const Students = () => (
  <UsersListLayout
    type="students"
    List={StudentsList}
    Filter={StudentsFilter}
  />
);

export default memo(Students);
