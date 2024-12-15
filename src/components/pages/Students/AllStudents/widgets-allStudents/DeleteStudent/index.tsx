import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteStudent = {
  student: string;
  closeModal: () => void;
};

const DeleteStudent = ({ student, closeModal }: TDeleteStudent) => (
  <Modal
    size="sm"
    title="Delete Student from School?"
    content={
      <p className="my-6">
        Deleting {student} would also delete the student information
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteStudent);
