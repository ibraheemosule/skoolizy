import { memo } from 'react';
import UsersListLayout from '~components/reusables/UsersListLayout';
import TeachersList from './TeachersList';
import TeachersFilter from './TeachersFilter';

const Teachers = () => (
  <UsersListLayout
    type="teachers"
    List={TeachersList}
    Filter={TeachersFilter}
  />
);

export default memo(Teachers);
