import SideHeaderTable from 'components/reusables/custom-table/SideHeaderTable';
import { memo } from 'react';
import EditTimeTable from './edit-timetable';

const topHeader = [
  '8-9',
  '9-10',
  '10-11',
  '11-12',
  'break',
  '12-1',
  '1-2',
  '2-3',
  '3-4',
];

const content = {
  Monday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Tuesday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Wednesday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Thursday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],

  Friday: [
    'phy',
    'chem',
    'bio',
    'math',
    'break',
    'econs',
    'econs',
    'bio',
    'geo',
  ],
};

const TimeTable = () => (
  <>
    <EditTimeTable />
    <div className="mt-6">
      <SideHeaderTable topHeaders={topHeader} content={content} />
    </div>
  </>
);

export default memo(TimeTable);
