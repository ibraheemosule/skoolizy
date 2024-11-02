import { useState } from 'react';
import ListOptions from '~components/reusables/ListOptions';
import AddStudent from '../Add';
import FilterStaffs from '../Filter';

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
