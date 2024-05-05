import { useState } from 'react';
import { BaseBtn, ActionBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';
import Modal from '~components/reusables/Modal';
import TeachersFilter from './TeachersFilter';
import NewTeacher from './NewTeacher';

export default function TeachersOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <div className="flex flex-wrap justify-end gap-4">
        <BaseBtn
          onClick={() => setModal('filter')}
          className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
        >
          Filter Teachers <Icon name="filter" height={20} width={20} />
        </BaseBtn>
        <ActionBtn
          onClick={() => setModal('newTeacher')}
          className="px-4 py-2 text-purple.dark hover:opacity-50"
        >
          Add a new teacher
        </ActionBtn>
      </div>
      {modal === 'filter' && (
        <Modal
          size="sm"
          title="Filter Teachers By"
          content={<TeachersFilter />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
      {modal === 'newTeacher' && (
        <Modal
          size="sm"
          title="Send an invite link to a Teacher"
          content={<NewTeacher />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
    </>
  );
}
