import { useState } from 'react';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { List, ListItem } from '~components/reusables/List/List';
import { capitalizeChar } from '~utils/format';
import { personal, canEdit } from './u-personal-info';
import EditListItemModal from '~components/reusables/List/EditListItemModal';

const PersonalInfo = () => {
  const [info, setInfo] = useState<Record<string, string>>({});

  const udpateValue = (key: string) => (v: string) => setInfo({ [key]: v });

  return (
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
                    edit
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

export default PersonalInfo;
