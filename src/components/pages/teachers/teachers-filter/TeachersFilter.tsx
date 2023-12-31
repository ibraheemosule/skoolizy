import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';

const TeachersFilter = () => (
  <>
    <div>
      <BoldText>Subject:</BoldText>
      <div className="mt-1">
        <CustomField>
          <>
            <CustomField.NonEditable>None</CustomField.NonEditable>
            <CustomField.DropdownWrapper>
              <CustomField.Dropdown>Approved</CustomField.Dropdown>
              <CustomField.Dropdown>Rejected</CustomField.Dropdown>
              <CustomField.Dropdown>Pending</CustomField.Dropdown>
            </CustomField.DropdownWrapper>
          </>
        </CustomField>
      </div>
    </div>
    <div>
      <BoldText>Gender:</BoldText>
      <div className="mt-1">
        <CustomField>
          <>
            <CustomField.NonEditable>In Request</CustomField.NonEditable>
            <CustomField.DropdownWrapper>
              <CustomField.Dropdown>here</CustomField.Dropdown>
            </CustomField.DropdownWrapper>
          </>
        </CustomField>
      </div>
    </div>
    <div>
      <BoldText>Date Joined:</BoldText>
      <div className="mt-1">
        <CustomField>
          <>
            <CustomField.NonEditable>In Request</CustomField.NonEditable>
            <CustomField.DropdownWrapper>
              <CustomField.Dropdown>here</CustomField.Dropdown>
            </CustomField.DropdownWrapper>
          </>
        </CustomField>
      </div>
    </div>
  </>
);

export default memo(TeachersFilter);
