import SelectField from '~components/reusables/CustomField/SelectField';
import TextField from '~components/reusables/CustomField/TextField';
import { ListItemEditModal } from '~components/reusables/List/EditListItemModal';
import { List, ListItem } from '~components/reusables/List/List';
import { BaseBtn } from '~components/reusables/ui/Buttons';

import { capCharRemoveUnderscore } from '~utils';
import { canEdit, personalInfoDropdownEdit } from './utils-personal-info';
import usePersonalInfo from './hooks-personal-info/usePersonalInfo';
import Photo from '~reusables/Photo';

const PersonalInfo = () => {
  const {
    personal,
    updateValueFn,
    handleUploadFn,
    info,
    setInfo,
    image,
    updateAccount,
  } = usePersonalInfo();

  return (
    <>
      <Photo image={image} setImage={handleUploadFn} />
      <List>
        {Object.entries(personal).map(([key, value]) => {
          const edit = typeof info[key] === 'string';

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
                    scroll={false}
                    actionFn={async () => updateAccount(info)}
                  >
                    {Object.keys(personalInfoDropdownEdit).includes(key) ? (
                      <SelectField
                        list={
                          personalInfoDropdownEdit[
                            key as keyof typeof personalInfoDropdownEdit
                          ]
                        }
                        value={info[key]}
                        onSelect={(arg: string) => updateValueFn(key)(arg)}
                      />
                    ) : (
                      <TextField
                        value={info[key]}
                        onChange={(e) => updateValueFn(key)(e.target.value)}
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
