import { memo } from 'react';
import CustomField from '~reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';

const testing = ['everyone', 'parents', 'teachers', 'students'];

const NewAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const [announcement, setAnnouncement] = useCustomField<string>('');
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    testing
  );

  return (
    <Modal
      size="md"
      title="Make a new announcement"
      content={
        <div className="pb-8">
          <div>
            <div className="mt-1">
              <CustomField
                onChange={(v) => setAnnouncement(v)}
                field="input"
                value={announcement}
                placeholder="Type announcement title"
                icon={null}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="mt-1">
              <textarea
                placeholder="Type more details about announcement here..."
                className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
                maxLength={200}
              />
            </div>
          </div>
          <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
            <div className="w-[150px]">
              <CustomField
                placeholder="Recipients"
                value={value}
                onSelect={setValue}
                field="select"
                filterFn={filterFn}
              >
                <CustomField.DropdownWrapper width={200}>
                  {list.map((name) => (
                    <CustomField.Dropdown key={name} value={name}>
                      {name}
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
            <ActionBtn className="px-4 py-2 text-purple.dark hover:opacity-50">
              Send Announcement
            </ActionBtn>
          </div>
        </div>
      }
      close={() => closeModal()}
    />
  );
};

export default memo(NewAnnouncement);
