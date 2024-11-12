import { useState } from 'react';
import FilterStudents from '../FilterStudents';
import AddStudent from '../../AddStudent';
import ListOptions from '~components/reusables/ListOptions';

export default function StudentsOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onManageClick={() => setModal('filter')}
        onActionClick={() => setModal('new')}
        actionText="Add a new student"
      />
      {modal === 'filter' && <FilterStudents closeModal={() => setModal('')} />}
      {modal === 'new' && <AddStudent closeModal={() => setModal('')} />}
    </>
  );
}
