import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field';

const TeachersFilter = () => (
  <>
    <div>
      <BoldText>Class:</BoldText>
      <div className="mt-1">
        <CustomField field="select" value="Unset">
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown>Approved</CustomField.Dropdown>
            <CustomField.Dropdown>Rejected</CustomField.Dropdown>
            <CustomField.Dropdown>Pending</CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </div>
    <div>
      <BoldText>Gender:</BoldText>
      <div className="mt-1">
        <CustomField field="select" value="Unset">
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown>Male</CustomField.Dropdown>
            <CustomField.Dropdown>Female</CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </div>
    <div>
      <BoldText>Sort By:</BoldText>
      <div className="mt-1">
        <CustomField field="select" value="Unset">
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown>
              Highest to Lowest Grades
            </CustomField.Dropdown>
            <CustomField.Dropdown>
              Lowest to Highest Grades
            </CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </div>
    <div>
      <BoldText>Ratings:</BoldText>
      <div className="mt-1">
        <CustomField field="select" value="Unset">
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown>0 &gt; 1</CustomField.Dropdown>
            <CustomField.Dropdown>1 &gt; 2</CustomField.Dropdown>
            <CustomField.Dropdown>2 &gt; 3</CustomField.Dropdown>
            <CustomField.Dropdown>3 &gt; 4</CustomField.Dropdown>
            <CustomField.Dropdown>4 &gt; 5</CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </div>
  </>
);

export default memo(TeachersFilter);
