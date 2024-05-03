import { useState, ReactElement } from 'react';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { DocumentList, List, ListItem } from '~components/reusables/List/List';
import { capitalizeChar } from '~utils/format';
import { academic, canEdit } from './u-academic-info';
import EditListItemModal from '~components/reusables/List/EditListItemModal';

const AcademicInfo = () => {
  const [info, setInfo] = useState<Record<string, string>>({});

  const udpateValue = (key: string) => (v: string) => setInfo({ [key]: v });

  return Object.entries(academic).map(([k, v]) => (
    <>
      <div className="py-6 font-bold text-sm border-b border-gray-100">
        {capitalizeChar(k)}
      </div>
      <List key={k}>
        {Object.entries(v).map(([key, value]) => {
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
                ) : key === 'certificate_obtained' && Array.isArray(value) ? (
                  <DocumentList doc={value} />
                ) : (
                  <span>{value}</span>
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
    </>
  )) as unknown as ReactElement[];
};

export default AcademicInfo;
