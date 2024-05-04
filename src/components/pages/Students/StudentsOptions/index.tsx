import { useState } from 'react';
import { BaseBtn, ActionBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';
import Modal from '~components/reusables/Modal';
import StudentsFilter from './StudentsFilter';
import NewStudent from './NewStudent';

export default function StudentsOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <div className="flex flex-wrap justify-end gap-4">
        <BaseBtn
          onClick={() => setModal('filter')}
          className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
        >
          Filter Students <Icon name="filter" height={20} width={20} />
        </BaseBtn>
        <ActionBtn
          onClick={() => setModal('newStudent')}
          className="px-4 py-2 text-purple.dark hover:opacity-50"
        >
          Add a new student
        </ActionBtn>
      </div>
      {modal === 'filter' && (
        <Modal
          size="sm"
          title="Filter Students By"
          content={<StudentsFilter />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
      {modal === 'newStudent' && (
        <Modal
          size="sm"
          title="Send an invite link to a student"
          content={<NewStudent />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
    </>
  );
}
