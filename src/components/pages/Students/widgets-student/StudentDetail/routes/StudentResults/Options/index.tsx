import { useState } from 'react';
import ListOptions from '~components/reusables/ListOptions';
import NewStaff from './AddStudentResult';
import FilterStaffs from './FilterStudentResults';

export default function StaffsOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onActionClick={() => setModal('newStaff')}
        onManageClick={() => setModal('filter')}
        actionText="Add a staff to subject"
      />
      {modal === 'filter' && <FilterStaffs closeModal={() => setModal('')} />}
      {modal === 'newStaff' && <NewStaff closeModal={() => setModal('')} />}
    </>
  );
}
