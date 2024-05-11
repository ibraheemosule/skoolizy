import { useState } from 'react';
import FilterTeachers from './Filter';
import NewTeacher from './Add';
import ListOptions from '~components/reusables/ListOptions';

export default function TeachersOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onActionClick={() => setModal('newTeacher')}
        onManageClick={() => setModal('filter')}
        actionText="Add a teacher to subject"
      />
      {modal === 'filter' && <FilterTeachers closeModal={() => setModal('')} />}
      {modal === 'newTeacher' && <NewTeacher closeModal={() => setModal('')} />}
    </>
  );
}
