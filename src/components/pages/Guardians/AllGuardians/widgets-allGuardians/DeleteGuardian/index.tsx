import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteGaurdian = {
  guardian: string;
  closeModal: () => void;
};

const DeleteGaurdian = ({ guardian, closeModal }: TDeleteGaurdian) => (
  <Modal
    size="sm"
    title="Delete Guardian from School?"
    content={
      <p className="my-6">
        Deleting {guardian} would also delete the guardian information
      </p>
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteGaurdian);
