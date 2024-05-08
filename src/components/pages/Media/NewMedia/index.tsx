import { ChangeEvent, memo, useState } from 'react';
import Icon from '~assets/Icons';
import Modal from '~components/reusables/Modal';

const NewMedia = ({ closeModal }: { closeModal: () => void }) => {
  const [image, setImage] = useState('');

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Modal
      size="sm"
      title="Upload New Image"
      content={
        <div className="pb-8">
          {image && (
            <img
              src={image}
              alt="upload"
              className="max-w-[150px] h-auto mx-auto border-dashed border-gray-300 border rounded-lg object-contain"
            />
          )}

          <label className="w-40 mx-auto flex flex-col items-center py-2 mt-6 rounded-lg shadow-sm uppercase border cursor-pointer">
            <Icon name="upload" />
            <span className="mt-2 text-xs font-bold">
              {image ? 'Replace image' : 'Select an image'}
            </span>
            <input
              onChange={handleUpload}
              accept=".jpg, .png, .jpeg"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      }
      close={() => closeModal()}
      action={() => null}
      actionText="Done"
    />
  );
};

export default memo(NewMedia);
