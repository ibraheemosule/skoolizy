import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TViewMedia = {
  img: string;
  closeModal: () => void;
};

const ViewMedia = ({ img, closeModal }: TViewMedia) => (
  <Modal
    size="md"
    scroll={false}
    content={
      <img
        className=" mx-auto my-4 w-auto h-full object-contain"
        src={img}
        alt="imaging"
      />
    }
    close={() => closeModal()}
  />
);

export default memo(ViewMedia);
