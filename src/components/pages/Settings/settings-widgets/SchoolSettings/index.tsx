import { ChangeEvent, useState } from 'react';
import Icon from '~assets/Icons';
import TextField from '~components/reusables/CustomField/TextField';
import Modal from '~components/reusables/Modal';
import { BoldText } from '~reusables/ui/Text';
import { List, ListItem } from '../../../../reusables/List/List';
import { ActionBtn } from '../../../../reusables/ui/Buttons';

const schoolSettingsType = ['School Name', 'Logo'] as const;

type SchoolSettingsType = (typeof schoolSettingsType)[number];

const SchoolSettings = () => {
  const [temporarySchoolName, setTemporarySchoolName] = useState('');
  const [activeSchoolName, setActiveSchoolName] = useState('');

  const [temporarySchoolLogo, setTemporarySchoolLogo] = useState('');
  const [activeSchoolLogo, setActiveSchoolLogo] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(
    {} as { [key in SchoolSettingsType]: boolean }
  );

  function toggleModalAndUpdateTemporaryValue(
    settingsType: SchoolSettingsType
  ) {
    setIsModalOpen((prevModal) => ({
      ...prevModal,
      [settingsType]: !prevModal[settingsType],
    }));

    const updateFunctions = {
      'School Name': () => setTemporarySchoolName(temporarySchoolName || ''),
      Logo: () => setTemporarySchoolLogo(temporarySchoolLogo || ''),
    };

    updateFunctions[settingsType]();
  }

  function handleTemporarySchoolName(e: ChangeEvent<HTMLInputElement>) {
    setTemporarySchoolName(e.target.value);
  }

  function handleTemporarySchoolLogo(e: ChangeEvent<HTMLInputElement>) {
    if (e.target?.files) setTemporarySchoolLogo(URL.createObjectURL(e.target.files[0]));
  }

  function updateSchoolSettings(settingsType: SchoolSettingsType) {
    const updateFunctions = {
      'School Name': () => setActiveSchoolName(temporarySchoolName),
      Logo: () => setActiveSchoolLogo(temporarySchoolLogo),
    };

    updateFunctions[settingsType]();
    toggleModalAndUpdateTemporaryValue(settingsType);
  }

  return (
    <div>
      <BoldText className="py-6 border-b border-gray-100">
        School Profile Settings
      </BoldText>
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
                onClick={() =>
                  toggleModalAndUpdateTemporaryValue('School Name')
                }
              >
                {' '}
                Edit
              </ActionBtn>
              {isModalOpen['School Name'] && (
                <Modal
                  size="sm"
                  close={() => {
                    toggleModalAndUpdateTemporaryValue('School Name');
                  }}
                  title="Update School Name"
                  action={() => {
                    updateSchoolSettings('School Name');
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

        <ListItem
          key="Logo"
          title="Logo"
          description={
            activeSchoolLogo.length ? (
              <img
                src={activeSchoolLogo}
                alt="upload"
                className="size-32 border-dashed border-gray-300 border rounded-lg object-cover"
              />
            ) : (
              <p>N/A</p>
            )
          }
          action={
            <div>
              <ActionBtn
                className="my-6 sm:m-0 cursor-pointer"
                onClick={() => toggleModalAndUpdateTemporaryValue('Logo')}
              >
                {' '}
                Edit
              </ActionBtn>
              {isModalOpen.Logo && (
                <Modal
                  size="sm"
                  close={() => {
                    toggleModalAndUpdateTemporaryValue('Logo');
                  }}
                  title="Update Logo"
                  action={() => {
                    updateSchoolSettings('Logo');
                  }}
                  actionText="Update"
                  content={
                    <div className="pb-8">
                      {temporarySchoolLogo.length !== 0 && (
                        <img
                          src={temporarySchoolLogo}
                          alt="upload"
                          className="max-w-[150px] h-auto mx-auto border-dashed border-gray-300 border rounded-lg object-contain"
                        />
                      )}

                      <label className="w-40 mx-auto flex flex-col items-center py-2 mt-6 rounded-lg shadow-sm uppercase border cursor-pointer">
                        <Icon name="upload" />
                        <span className="mt-2 text-xs font-bold">
                          {temporarySchoolLogo?.length
                            ? 'Replace image'
                            : 'Select an image'}
                        </span>
                        <input
                          onChange={(e) => handleTemporarySchoolLogo(e)}
                          accept=".jpg, .png, .jpeg"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  }
                />
              )}
            </div>
          }
        />
      </List>
    </div>
  );
};
export default SchoolSettings;
