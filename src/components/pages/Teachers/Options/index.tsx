import { useState } from 'react';
import FilterTeachers from './Filter';
import NewTeacher from './Add';
import ListOptions from '~components/reusables/ListOptions';

export default function TeachersOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onManageClick={() => setModal('filter')}
        onActionClick={() => setModal('new')}
        actionText="Add a new teacher"
      />
      {modal === 'filter' && <FilterTeachers closeModal={() => setModal('')} />}
      {modal === 'new' && <NewTeacher closeModal={() => setModal('')} />}
    </>
  );
}
