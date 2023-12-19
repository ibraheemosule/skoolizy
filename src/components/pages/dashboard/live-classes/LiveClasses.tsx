import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomTable from 'components/reusables/custom-table/CustomTable';

const MyAppointments = () => (
  <div className="mt-8">
    <div className="flex justify-between">
      <BoldText>Classes In Progress</BoldText>
      <BoldText>1pm - 2pm</BoldText>
    </div>
    <div>
      <CustomTable />
    </div>
  </div>
);

export default memo(MyAppointments);
