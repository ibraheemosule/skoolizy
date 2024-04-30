import { memo } from 'react';
import CustomField from '~reusables/CustomField';
import { ActionBtn } from '~reusables/ui/Buttons';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

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

const NewRequest = () => {
  const [value, setValue] = useCustomField<string>('', testing);
  return (
    <div className="md:w-96 pb-8">
      <textarea
        placeholder="Add a new request"
        className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
        maxLength={200}
      />
      <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
        <CustomField value={value} onSelect={setValue} field="select">
          <CustomField.DropdownWrapper width={200}>
            {testing.map((name) => (
              <CustomField.Dropdown key={name} value={name}>
                {name}
              </CustomField.Dropdown>
            ))}
          </CustomField.DropdownWrapper>
        </CustomField>
        <ActionBtn className="px-4 py-2 text-purple.dark hover:opacity-50">
          Request
        </ActionBtn>
      </div>
    </div>
  );
};

export default memo(NewRequest);
