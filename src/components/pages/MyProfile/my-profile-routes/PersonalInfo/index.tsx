import { ChangeEvent, useState } from 'react';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { List, ListItem } from '~components/reusables/List/List';
import { capitalizeChar } from '~utils/format';
import { personal, canEdit } from './u-personal-info';
import EditListItemModal from '~components/reusables/List/EditListItemModal';
import { SmallText } from '~components/reusables/ui/Text';

const PersonalInfo = () => {
  const [info, setInfo] = useState<Record<string, string>>({});
  const [image, setImage] = useState('');

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) setImage(URL.createObjectURL(e.target.files[0]));
  };

  const udpateValue = (key: string) => (v: string) => setInfo({ [key]: v });

  return (
    <>
      <div className="text-center">
        <img
          className="h-32 w-32 md:h-44 md:w-44 bg-gray-200 mx-auto object-contain rounded-full"
          src={
            image ||
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
          }
          alt="profile"
        />
        <label className="block cursor-pointer text-purple.dark my-4 text-center">
          <SmallText>Change Profile Picture</SmallText>
          <input
            onChange={handleUpload}
            accept=".jpg, .png, .jpeg"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <List>
        {Object.entries(personal).map(([key, value]) => {
          const edit = typeof info[key] === 'string';
          return (
            <ListItem
              key={key}
              title={capitalizeChar(key)}
              description={
                edit ? (
                  <EditListItemModal
                    close={() => setInfo({})}
                    value={info[key]}
                    updateValue={udpateValue(key)}
                    field={key}
                  />
                ) : (
                  value
                )
              }
              action={
                canEdit.includes(key) ? (
                  <div className="flex gap-4 justify-center">
                    <BaseBtn
                      onClick={() => setInfo({ [key]: '' })}
                      className=" text-purple.dark hover:-translate-y-0.5"
                    >
                      Edit
                    </BaseBtn>
                  </div>
                ) : null
              }
            />
          );
        })}
      </List>
    </>
  );
};

export default PersonalInfo;
