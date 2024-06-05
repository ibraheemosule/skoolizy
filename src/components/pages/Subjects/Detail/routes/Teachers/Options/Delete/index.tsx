import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteTeacher = {
  teacher: string;
  closeModal: () => void;
};

const DeleteTeacher = ({ teacher, closeModal }: TDeleteTeacher) => (
  <Modal
    size="sm"
    title="Remove Teacher from subject?"
    content={
      <p>
        Deleting {teacher} means the teacher won&apos;t be registered under this
        subject
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteTeacher);
