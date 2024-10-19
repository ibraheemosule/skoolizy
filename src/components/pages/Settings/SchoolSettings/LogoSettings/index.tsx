import { ChangeEvent, useState } from 'react';
import Icon from '~assets/Icons';
import { List, ListItem } from '~components/reusables/List/List';
import Modal from '~components/reusables/Modal';
import { ActionBtn } from '~components/reusables/ui/Buttons';

const SchoolLogoSetting = () => {
  const [temporarySchoolLogo, setTemporarySchoolLogo] = useState('');
  const [activeSchoolLogo, setActiveSchoolLogo] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleTemporarySchoolLogo(e: ChangeEvent<HTMLInputElement>) {
    if (e.target?.files) {
      setTemporarySchoolLogo(URL.createObjectURL(e.target.files[0]));
    }
  }

  function toggleModalAndUpdateTemporaryValue() {
    setIsModalOpen(!isModalOpen);

    setTemporarySchoolLogo(
      temporarySchoolLogo === activeSchoolLogo
        ? temporarySchoolLogo
        : activeSchoolLogo
    );
  }

  function updateSchoolLogo() {
    setActiveSchoolLogo(temporarySchoolLogo);

    toggleModalAndUpdateTemporaryValue();
  }

  return (
    <List>
      <ListItem
        key="Logo"
        title="Logo"
        description={
          activeSchoolLogo ? (
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
                title="Update Logo"
                action={() => {
                  updateSchoolLogo();
                }}
                actionText="Update"
                content={
                  <div className="pb-8">
                    {temporarySchoolLogo && (
                      <img
                        src={temporarySchoolLogo}
                        alt="upload"
                        className="max-w-[150px] h-auto mx-auto border-dashed border-gray-300 border rounded-lg object-contain"
                      />
                    )}

                    <label className="w-40 mx-auto flex flex-col items-center py-2 mt-6 rounded-lg shadow-sm uppercase border cursor-pointer">
                      <Icon name="upload" />
                      <span className="mt-2 text-xs font-bold">
                        {temporarySchoolLogo
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
  );
};

SchoolLogoSetting.displayName = 'ListItem';
export default SchoolLogoSetting;
