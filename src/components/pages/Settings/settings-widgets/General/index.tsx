import { ChangeEvent, useState } from 'react';
import Icon from '~assets/Icons';
import TextField from '~components/reusables/CustomField/TextField';
import Modal from '~components/reusables/Modal';
import { BoldText } from '~reusables/ui/Text';
import { List, ListItem } from '../../../../reusables/List/List';
import { ActionBtn } from '../../../../reusables/ui/Buttons';

const schoolInfo = ['School Name', 'Logo'] as const;

type SchoolInfoType = (typeof schoolInfo)[number];
const General = () => {
  const [data, setData] = useState({} as { [key in SchoolInfoType]: string });
  const [tempData, setTempData] = useState(
    {} as { [key in SchoolInfoType]: string }
  );
  const [isModalOpen, setIsModalOpen] = useState(
    {} as { [key in SchoolInfoType]: boolean }
  );
  function handleModal(info: SchoolInfoType) {
    setIsModalOpen((prevModal) => ({
      ...prevModal,
      [info]: !prevModal[info],
    }));

    setTempData((prevTempData) => ({
      ...prevTempData,
      [info]: data[info] || '',
    }));
  }

  function handleTempData(
    e: ChangeEvent<HTMLInputElement>,
    info: SchoolInfoType
  ) {
    setTempData((prevTempData) => ({
      ...prevTempData,
      [info]: e.target?.files
        ? URL.createObjectURL(e.target.files[0])
        : e?.target?.value || '',
    }));
  }
  function applyChanges(info: SchoolInfoType) {
    setData((prevData) => ({
      ...prevData,
      [info]: tempData[info],
    }));
    handleModal(info);
  }
  return (
    <div>
      <BoldText className="py-6 border-b border-gray-100">General</BoldText>
      <List>
        {schoolInfo.map((info) => {
          const validLogo = info === 'Logo' && data.Logo;
          return (
            <ListItem
              key={info}
              title={info}
              description={
                validLogo ? (
                  <img
                    src={data.Logo}
                    alt="upload"
                    className="size-32 border-dashed border-gray-300 border rounded-lg object-cover"
                  />
                ) : (
                  <p>{!data[info] ? 'N/A' : data[info]}</p>
                )
              }
              action={
                <div>
                  <ActionBtn
                    className="my-6 sm:m-0 cursor-pointer"
                    onClick={() => handleModal(info)}
                  >
                    {' '}
                    Edit
                  </ActionBtn>
                  {isModalOpen[info] && (
                    <Modal
                      close={() => {
                        handleModal(info);
                      }}
                      title={`Update ${info}`}
                      action={() => {
                        applyChanges(info);
                      }}
                      actionText="Update"
                      content={
                        info === 'School Name' ? (
                          <TextField
                            placeholder="Type School Name here"
                            onChange={(e) => handleTempData(e, info)}
                            value={tempData[info]}
                          />
                        ) : (
                          <div className="pb-8">
                            {validLogo && (
                              <img
                                src={tempData.Logo}
                                alt="upload"
                                className="max-w-[150px] h-auto mx-auto border-dashed border-gray-300 border rounded-lg object-contain"
                              />
                            )}

                            <label className="w-40 mx-auto flex flex-col items-center py-2 mt-6 rounded-lg shadow-sm uppercase border cursor-pointer">
                              <Icon name="upload" />
                              <span className="mt-2 text-xs font-bold">
                                {tempData.Logo?.length
                                  ? 'Replace image'
                                  : 'Select an image'}
                              </span>
                              <input
                                onChange={(e) => handleTempData(e, info)}
                                accept=".jpg, .png, .jpeg"
                                type="file"
                                className="hidden"
                              />
                            </label>
                          </div>
                        )
                      }
                    />
                  )}
                </div>
              }
            />
          );
        })}
      </List>
    </div>
  );
};
export default General;
