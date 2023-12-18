import { memo } from 'react';
import { BaseText } from 'components/reusables/ui/text';

const MyAppointments = () => (
  <div className="mt-6">
    <BaseText>My Appointment</BaseText>
  </div>
);

export default memo(MyAppointments);
