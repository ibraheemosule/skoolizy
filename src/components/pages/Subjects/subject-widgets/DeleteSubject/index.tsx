import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteSubject = {
  subject: string;
  closeModal: () => void;
};

const DeleteSubject = ({ subject, closeModal }: TDeleteSubject) => (
  <Modal
    size="sm"
    title="Proceed to delete subject?"
    content={
      <p className="mt-4 pb-4">
        Deleting {subject} will also delete all the topics created for this
        subject. This action cannot be undone
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteSubject);
