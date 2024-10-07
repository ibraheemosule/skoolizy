import { useState } from 'react';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils/format';
import { contact, canEdit, contactAuthEdit } from './u-contact-info';
import {
  ListItemAuthEditModal,
  ListItemEditModal,
} from '~components/reusables/List/EditListItemModal';
import TextField from '~components/reusables/CustomField/TextField';

const ContactInfo = () => {
  const [info, setInfo] = useState<Record<string, string>>({});

  const udpateValue = (key: string) => (v: string) => setInfo({ [key]: v });

  return (
    <List>
      {Object.entries(contact).map(([key, value]) => {
        const edit = typeof info[key] === 'string';

        const authEdit = contactAuthEdit.includes(key);

        return (
          <ListItem
            key={key}
            title={capCharRemoveUnderscore(key)}
            description={
              <>
                {!edit && value}
                {edit &&
                  (authEdit ? (
                    <ListItemAuthEditModal
                      close={() => setInfo({})}
                      value={info[key]}
                      field={key}
                    >
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
                    </ListItemAuthEditModal>
                  ) : (
                    <ListItemEditModal
                      close={() => setInfo({})}
                      value={info[key]}
                      field={key}
                    >
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
                    </ListItemEditModal>
                  ))}
              </>
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
  );
};

export default ContactInfo;
