import { memo } from 'react';
import CustomField from 'components/reusables/custom-field/CustomField';
import { BoldText } from 'components/reusables/ui/text';
import RequestCard from '../../../reusables/request-card/RequestCard';

const Requests = () => (
  <div className="flex  flex-col md:h-full md:overflow-hidden">
    <div className="flex flex-wrap gap-8 gap-y-4">
      <div>
        <BoldText>Filter By:</BoldText>
        <div className="mt-1">
          <CustomField>
            <>
              <CustomField.NonEditable>
                {['topeloluwa']}
              </CustomField.NonEditable>
              <CustomField.DropdownWrapper multiselect>
                <CustomField.Dropdown>Approved</CustomField.Dropdown>
                <CustomField.Dropdown>Rejected</CustomField.Dropdown>
                <CustomField.Dropdown>Pending</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
      </div>
      <div>
        <BoldText>Select Class:</BoldText>
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
        <BoldText>From Date:</BoldText>
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
        <BoldText>To Date:</BoldText>
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
    </div>
    <div className="mt-8 pb-8 grow md:h-auto overflow-auto">
      <div className="mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-4 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
    </div>
  </div>
);

export default memo(Requests);
