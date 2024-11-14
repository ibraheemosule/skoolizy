import { useState } from 'react';
import AddStudent from '~components/pages/Students/widgets-student/AddStudent';
import ListOptions from '~components/reusables/ListOptions';
import FilterStaffs from '../FilterStaff';

export default function StaffsOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onManageClick={() => setModal('filter')}
        onActionClick={() => setModal('new')}
        actionText="Add a new staff"
      />
      {modal === 'filter' && <FilterStaffs closeModal={() => setModal('')} />}
      {modal === 'new' && <AddStudent closeModal={() => setModal('')} />}
    </>
  );
}
