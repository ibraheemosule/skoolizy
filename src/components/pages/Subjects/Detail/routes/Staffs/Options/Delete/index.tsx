import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteStaff = {
  staff: string;
  closeModal: () => void;
};

const DeleteStaff = ({ staff, closeModal }: TDeleteStaff) => (
  <Modal
    size="sm"
    title="Remove Staff from subject?"
    content={
      <p>
        Deleting {staff} means the staff won&apos;t be registered under this
        subject
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteStaff);
