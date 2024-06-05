import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteTeacher = {
  teacher: string;
  closeModal: () => void;
};

const DeleteTeacher = ({ teacher, closeModal }: TDeleteTeacher) => (
  <Modal
    size="sm"
    title="Delete Teacher from School?"
    content={
      <p>Deleting {teacher} would also delete the teacher information</p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteTeacher);
