import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TDeleteMedia = {
  img: string;
  closeModal: () => void;
};

const DeleteMedia = ({ img, closeModal }: TDeleteMedia) => (
  <Modal
    size="sm"
    title="Proceed to delete? This action cannot be undone"
    content={
      <img
        src={img}
        alt="media to delete"
        className="w-40 mx-auto h-40 mb-8 object-contain"
      />
    }
    action={() => null}
    close={() => closeModal()}
    actionText="Delete"
  />
);

export default memo(DeleteMedia);
