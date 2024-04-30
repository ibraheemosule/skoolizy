import { memo } from 'react';
import { BoldText } from '~reusables/ui/text';
import SideHeaderTable from '~reusables/custom-table/SideHeaderTable';

const content = {
  Classroom: ['JSS-1', 'JSS-2', 'JSS-3', 'SSS-1', 'SSS-2', 'SSS-3'],

  Subject: ['phy', 'chem', 'bio', 'math', 'English', 'econs'],

  Teacher: [
    'John Doe',
    'Mrs Jane Doe',
    'Miss Bright oloma',
    'Mr Joshua olumayowa',
    'Mr Ayo bamidele',
    'Mrs Juliet Maryjane',
  ],
};

const MyAppointments = () => (
  <div className="mt-8">
    <div className="flex justify-between">
      <BoldText>Classes In Progress</BoldText>
      <BoldText>1pm - 2pm</BoldText>
    </div>
    <div>
      <SideHeaderTable content={content} />
    </div>
  </div>
);

export default memo(MyAppointments);
