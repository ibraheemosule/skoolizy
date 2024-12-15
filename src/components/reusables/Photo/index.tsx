import { ChangeEvent, useState } from 'react';
import { SmallText } from '~reusables/ui/Text';
import Icon from '~assets/Icons';
import { FileType } from '~shared-ts-types/react-types';
import Modal from '~reusables/Modal';

const Photo = ({
  image,
  setImage,
  label = 'Change Picture',
}: {
  image?: string;
  setImage?: (arg: FileType) => void;
  label?: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(false);

  const handleUploadFn = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && setImage) {
      setLoading(true);
      await setImage?.(e.target.files[0]);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="inline-block">
        <div className="text-center">
          {image ? (
            <button
              onClick={() => setView(true)}
              disabled={!image}
              className={`relative ${
                image ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <img
                className="h-32 w-32 md:h-44 md:w-44 bg-gray-100 mx-auto rounded-full"
                src={
                  typeof image === 'string' ? image : URL.createObjectURL(image)
                }
                alt="avi"
                onLoad={() => setLoading(false)}
              />
              {loading && (
                <Icon
                  name="spinner"
                  height={40}
                  width={40}
                  fill="#432c81"
                  style={{ margin: 'auto' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </button>
          ) : (
            <div className="bg-gray-50 shadow-sm h-32 w-32 md:h-44 md:w-44 grid place-items-center rounded-full">
              <Icon
                name="user"
                className="h-16 w-16 md:h-24 md:w-24"
                strokeWidth={1}
                stroke="#868686"
              />
            </div>
          )}
          {setImage && (
            <label className="block cursor-pointer text-purple.dark my-4 text-center">
              <SmallText className="inline">{label}</SmallText>
              <input
                onChange={handleUploadFn}
                accept=".jpg, .png, .jpeg"
                type="file"
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
      {image && view && (
        <Modal
          close={() => setView(false)}
          content={
            <img
              className="mx-auto"
              src={
                typeof image === 'string' ? image : URL.createObjectURL(image)
              }
              alt="avi"
              onLoad={() => setLoading(false)}
            />
          }
        />
      )}
    </>
  );
};

export default Photo;
