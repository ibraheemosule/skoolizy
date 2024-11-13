import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteTopic = {
  closeModal: () => void;
};

const DeleteTopic = ({ closeModal }: TDeleteTopic) => (
  <Modal
    size="sm"
    title="Proceed to delete topic?"
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteTopic);
