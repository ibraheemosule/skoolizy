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
    content={<img className="w-full h-auto" src={img} alt="imaging" />}
    close={() => closeModal()}
  />
);

export default memo(ViewMedia);
