import { memo } from 'react';
import { BaseText } from 'components/reusables/ui/text';
import CustomTable from 'components/reusables/custom-table/CustomTable';

const MyAppointments = () => (
  <div className="mt-8">
    <div className="flex justify-between">
      <BaseText>Classes In Progress</BaseText>
      <strong>1pm - 2pm</strong>
    </div>
    <div>
      <CustomTable />
    </div>
  </div>
);

export default memo(MyAppointments);
