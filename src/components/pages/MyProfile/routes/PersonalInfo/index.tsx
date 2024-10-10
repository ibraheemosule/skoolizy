import { ChangeEvent, useState } from 'react';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils/format';
import { personal, canEdit, personalInfoDropdownEdit } from './u-personal-info';
import { ListItemEditModal } from '~components/reusables/List/EditListItemModal';
import { SmallText } from '~components/reusables/ui/Text';
import TextField from '~components/reusables/CustomField/TextField';
import SelectField from '~components/reusables/CustomField/SelectField';

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
          console.log(edit);

          return (
            <ListItem
              key={key}
              title={capCharRemoveUnderscore(key)}
              description={
                edit ? (
                  <ListItemEditModal
                    close={() => setInfo({})}
                    value={info[key]}
                    field={key}
                  >
                    {Object.keys(personalInfoDropdownEdit).includes(key) ? (
                      <SelectField
                        list={
                          personalInfoDropdownEdit[
                            key as keyof typeof personalInfoDropdownEdit
                          ]
                        }
                        value={info[key]}
                        onSelect={(arg: string) => udpateValue(key)(arg)}
                      />
                    ) : (
                      <TextField
                        value={info[key]}
                        onChange={(e) => udpateValue(key)(e.target.value)}
                        placeholder={`Update ${capCharRemoveUnderscore(
                          key
                        )}...`}
                        type={
                          key.includes('phone')
                            ? 'tel'
                            : key.includes('email')
                              ? 'email'
                              : 'text'
                        }
                      />
                    )}
                  </ListItemEditModal>
                ) : (
                  value
                )
              }
              action={
                canEdit.includes(key) ? (
                  <div className="flex gap-4 justify-center">
                    <BaseBtn
                      onClick={() => setInfo({ [key]: value })}
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
