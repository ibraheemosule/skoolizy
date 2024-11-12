import { useState } from 'react';
import ListOptions from '~components/reusables/ListOptions';
import AddStudent from '~components/pages/Students/AddStudent';
import FilterStaffs from '../FilterStaffs';

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
