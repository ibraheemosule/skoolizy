import { ChangeEvent } from 'react';
import { SmallText } from '~reusables/ui/Text';
import Icon from '~assets/Icons';

const Photo = ({
  image,
  handleUploadFn,
  label = 'Change Picture',
}: {
  image: string;
  handleUploadFn?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}) => (
  <div className="grid justify-center">
    {image ? (
      <img
        className="h-32 w-32 md:h-44 md:w-44 bg-gray-100 mx-auto object-contain rounded-full"
        src={image}
        alt="avi"
      />
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
    {handleUploadFn && (
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

export default Photo;
