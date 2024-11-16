import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteStaff = {
  staff: string;
  closeModal: () => void;
};

const DeleteStaff = ({ staff, closeModal }: TDeleteStaff) => (
  <Modal
    size="sm"
    title="Delete Staff from School?"
    content={
      <p className="my-6">
        Deleting {staff} would also delete the staff information
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteStaff);
