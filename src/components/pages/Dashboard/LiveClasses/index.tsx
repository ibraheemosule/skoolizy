import SideHeaderTable from '~reusables/custom-table/SideHeaderTable';
import { BoldText } from '~reusables/ui/Text';

const sideHeader = ['Classroom', 'Subject', 'Staff'];
const topHeader = ['JSS-1', 'JSS-2', 'JSS-3', 'SSS-1', 'SSS-2', 'SSS-3'];

const content = [
  [
    'John Doe',
    'Mrs Jane Doe',
    'Miss Bright oloma',
    'Mr Joshua olumayowa',
    'Mr Ayo bamidele',
    'Mrs Juliet Maryjane',
  ],
  [
    'John Doe',
    'Mrs Jane Doe',
    'Miss Bright oloma',
    'Mr Joshua olumayowa',
    'Mr Ayo bamidele',
    'Mrs Juliet Maryjane',
  ],
  [
    'John Doe',
    'Mrs Jane Doe',
    'Miss Bright oloma',
    'Mr Joshua olumayowa',
    'Mr Ayo bamidele',
    'Mrs Juliet Maryjane',
  ],
];

const LiveClasses = () => (
  <div className="mt-8">
    <div className="flex justify-between">
      <BoldText>Classes In Progress</BoldText>
      <BoldText>1pm - 2pm</BoldText>
    </div>
    <div className="mt-2">
      <SideHeaderTable
        content={content}
        topHeaders={topHeader}
        sideHeader={sideHeader}
        boxWidth="150px"
      />
    </div>
  </div>
);

export default LiveClasses;
