import { ChangeEvent, useState } from 'react';
import TextField from '~components/reusables/CustomField/TextField';
import { ListItem } from '~components/reusables/List/List';
import Modal from '~components/reusables/Modal';
import { BaseBtn } from '~reusables/ui/Buttons';

const NameSetting = () => {
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
    <ListItem
      key="School Name"
      title="School Name"
      description={<p>{activeSchoolName.length ? activeSchoolName : 'N/A'}</p>}
      action={
        <div>
          <div className="flex gap-4 justify-center">
            <BaseBtn
              onClick={() => toggleModalAndUpdateTemporaryValue()}
              className=" text-purple.dark hover:-translate-y-0.5"
            >
              Edit
            </BaseBtn>
          </div>
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
  );
};

export default NameSetting;
