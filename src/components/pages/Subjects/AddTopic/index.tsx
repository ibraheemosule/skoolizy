import { memo } from 'react';
import CustomField from '~reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';

const testing = ['JSS-1', 'JSS-2', 'JSS-3', 'SSS-1', 'SSS-2', 'SSS-3'];

const AddTopic = ({
  closeModal,
  subject,
}: {
  subject: string;
  closeModal: () => void;
}) => {
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    ['All', ...testing]
  );

  return (
    <Modal
      size="md"
      title={`Add a new ${subject} topic`}
      content={
        <div className="pb-8">
          <textarea
            placeholder="Type topic here..."
            className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
            maxLength={200}
          />
          <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
            <div className="w-[150px]">
              <CustomField
                placeholder="Select Class"
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
              Submit
            </ActionBtn>
          </div>
        </div>
      }
      close={() => closeModal()}
    />
  );
};

export default memo(AddTopic);
