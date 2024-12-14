import { ChangeEvent, useState } from 'react';
import { SmallText } from '~reusables/ui/Text';
import Icon from '~assets/Icons';
import { FileType } from '~shared-ts-types/react-types';

const Photo = ({
  image,
  setImage,
  label = 'Change Picture',
}: {
  image: string;
  setImage?: (arg: FileType) => void;
  label?: string;
}) => {
  const [loading, setLoading] = useState(true);

  const handleUploadFn = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && setImage) {
      setLoading(true);
      await setImage?.(e.target.files[0]);
      setLoading(false);
    }
  };
  return (
    <div className="grid justify-center">
      {image ? (
        <div className="relative">
          <img
            className="h-32 w-32 md:h-44 md:w-44 bg-gray-100 mx-auto object-contain rounded-full"
            src={typeof image === 'string' ? image : URL.createObjectURL(image)}
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
        </div>
      ) : (
        <div className="bg-gray-50 shadow-sm h-32 w-32 md:h-44 md:w-44 grid place-items-center rounded-full">
          <Icon
            name="user"
            className="h-24 w-24 md:h-32 md:w-32"
            strokeWidth={1}
            stroke="#868686"
          />
        </div>
      )}
      {setImage && (
        <label className="block cursor-pointer text-purple.dark my-4 text-center">
          <SmallText>{label}</SmallText>
          <input
            onChange={handleUploadFn}
            accept=".jpg, .png, .jpeg"
            type="file"
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default Photo;
