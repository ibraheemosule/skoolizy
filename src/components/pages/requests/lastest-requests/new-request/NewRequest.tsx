import { memo } from 'react';
import CustomField from 'components/reusables/custom-field';
import { ActionBtn } from 'components/reusables/ui/buttons';

const NewRequest = () => (
  <div className="md:w-96">
    <textarea
      placeholder="Add a new request"
      className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
      maxLength={200}
    />
    <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
      <CustomField value="Request Criteria" field="select">
        <CustomField.DropdownWrapper>
          <CustomField.Dropdown>here</CustomField.Dropdown>
        </CustomField.DropdownWrapper>
      </CustomField>
      <ActionBtn className="px-4 py-2 text-purple.dark hover:opacity-50">
        Request
      </ActionBtn>
    </div>
  </div>
);

export default memo(NewRequest);
