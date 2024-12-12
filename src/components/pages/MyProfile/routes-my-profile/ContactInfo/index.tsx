import TextField from '~components/reusables/CustomField/TextField';
import {
  ListItemAuthEditModal,
  ListItemEditModal,
} from '~components/reusables/List/EditListItemModal';
import { List, ListItem } from '~components/reusables/List/List';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { capCharRemoveUnderscore } from '~utils';
import { canEdit, contactAuthEdit } from './utils-contact-info';
import useContactInfo from './hooks-contactInfo/useContactInfo';

const ContactInfo = () => {
  const { info, setInfo, updateValueFn, contact } = useContactInfo();

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
                    </ListItemAuthEditModal>
                  ) : (
                    <ListItemEditModal
                      close={() => setInfo({})}
                      value={info[key]}
                      field={key}
                    >
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
