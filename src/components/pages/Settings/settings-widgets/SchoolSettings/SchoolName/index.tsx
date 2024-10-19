import { ChangeEvent, useState } from 'react';
import TextField from '~components/reusables/CustomField/TextField';
import { List, ListItem } from '~components/reusables/List/List';
import Modal from '~components/reusables/Modal';
import { ActionBtn } from '~components/reusables/ui/Buttons';

const SchoolNameSetting = () => {
  const [temporarySchoolName, setTemporarySchoolName] = useState('');
  const [activeSchoolName, setActiveSchoolName] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleTemporarySchoolName(e: ChangeEvent<HTMLInputElement>) {
    setTemporarySchoolName(e.target.value);
  }

  function toggleModalAndUpdateTemporaryValue() {
    setIsModalOpen(!isModalOpen);

    setTemporarySchoolName(
      temporarySchoolName === activeSchoolName
        ? temporarySchoolName
        : activeSchoolName
    );
  }

  function updateSchoolName() {
    setActiveSchoolName(temporarySchoolName);

    toggleModalAndUpdateTemporaryValue();
  }

  return (
    <List>
      <ListItem
        key="School Name"
        title="School Name"
        description={
          <p>{activeSchoolName.length ? activeSchoolName : 'N/A'}</p>
        }
        action={
          <div>
            <ActionBtn
              className="my-6 sm:m-0 cursor-pointer"
              onClick={() => toggleModalAndUpdateTemporaryValue()}
            >
              {' '}
              Edit
            </ActionBtn>
            {isModalOpen && (
              <Modal
                size="sm"
                close={() => {
                  toggleModalAndUpdateTemporaryValue();
                }}
                title="Update School Name"
                action={() => {
                  updateSchoolName();
                }}
                actionText="Update"
                content={
                  <div className="mt-4 mb-6">
                    {' '}
                    <TextField
                      placeholder="Type School Name here"
                      onChange={(e) => handleTemporarySchoolName(e)}
                      value={temporarySchoolName}
                    />
                  </div>
                }
              />
            )}
          </div>
        }
      />
    </List>
  );
};

SchoolNameSetting.displayName = 'ListItem';
export default SchoolNameSetting;
