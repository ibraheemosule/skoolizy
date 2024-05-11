import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ActionBtn, BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import NewSubject from './Add';
import FilterSubjects from './Filter';
import DeleteSubject from './Delete';

const AllSubjects = () => {
  const [modal, setModal] = useState('');
  const [deleteSubject, setDeleteSubject] = useState('');

  return (
    <div className="flex flex-col md:h-full md:overflow-hidden">
      {modal === 'newSubject' && <NewSubject closeModal={() => setModal('')} />}
      {modal === 'filter' && <FilterSubjects closeModal={() => setModal('')} />}
      {deleteSubject && (
        <DeleteSubject
          subject={deleteSubject}
          closeModal={() => setDeleteSubject('')}
        />
      )}

      <div className="flex flex-wrap justify-end gap-2 mt-8">
        <BaseBtn
          onClick={() => setModal('filter')}
          className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
        >
          Filter Subjects <Icon name="filter" height={20} width={20} />
        </BaseBtn>
        <ActionBtn
          onClick={() => setModal('newSubject')}
          className="px-4 py-2 text-purple.dark hover:opacity-50"
        >
          New Subject
        </ActionBtn>
      </div>
      <div className="mt-6 pb-8 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 items-start gap-4 grow md:h-auto overflow-auto">
        <div className="mt-4 bg-gray-100 rounded-lg p-4 flex gap-4 justify-between">
          <NavLink className="text-xl text-purple.dark" to="mathematics">
            Mathematics
          </NavLink>
          <BaseBtn onClick={() => setDeleteSubject('mathematics')}>
            <Icon name="trash" height={18} width={18} stroke="#432c81" />
          </BaseBtn>
        </div>
      </div>
    </div>
  );
};

export default AllSubjects;
