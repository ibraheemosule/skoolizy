import SideHeaderTable from '~reusables/custom-table/SideHeaderTable';
import EditSubjectTimetable from './EditSubjectTimetable';

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

const SubjectTimetable = () => (
  <>
    <EditSubjectTimetable />
    <div className="mt-6">
      <SideHeaderTable topHeaders={topHeader} content={content} />
    </div>
  </>
);

export default SubjectTimetable;
