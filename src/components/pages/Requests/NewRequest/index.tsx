import { memo } from 'react';
import CustomField from '~reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';

const testing = [
  'here',
  'lakd',
  'kdgjfksf',
  'bakfko',
  'giodsfsl',
  'sdkfjakdf',
  'qdooaldkf',
  'ksdadkfjkdfj akfjsklajfkjkfsfoi',
];

const NewRequest = ({ closeModal }: { closeModal: () => void }) => {
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    testing
  );

  return (
    <Modal
      size="md"
      title="New Request"
      content={
        <div className="my-4 pb-8">
          <textarea
            placeholder="Add a new request"
            className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
            maxLength={200}
          />
          <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
            <div className="w-[150px]">
              <CustomField
                placeholder="Add Tags"
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
              Request
            </ActionBtn>
          </div>
        </div>
      }
      close={() => closeModal()}
    />
  );
};

export default memo(NewRequest);
