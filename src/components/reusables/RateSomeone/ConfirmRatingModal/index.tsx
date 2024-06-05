import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TConfirmRatingModal = {
  closeModal: () => void;
  rating: number;
};

const ConfirmRatingModal = ({ closeModal, rating }: TConfirmRatingModal) => (
  <Modal
    size="sm"
    title={`Confirm ${rating} Star${rating > 1 ? 's' : ''} Rating?`}
    action={() => null}
    close={() => closeModal()}
    actionText="Confirm"
  />
);

export default memo(ConfirmRatingModal);
