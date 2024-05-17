import SideHeaderTable from '~reusables/custom-table/SideHeaderTable';
import EditTimeTable from './Edit';

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

const sideHeader = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const content = [
  ['phy', 'chem', 'bio', 'math', 'break', 'econs', 'econs', 'bio', 'geo'],

  ['phy', 'chem', 'bio', 'math', 'break', 'econs', 'econs', 'bio', 'geo'],

  ['phy', 'chem', 'bio', 'math', 'break', 'econs', 'econs', 'bio', 'geo'],

  ['phy', 'chem', 'bio', 'math', 'break', 'econs', 'econs', 'bio', 'geo'],

  ['phy', 'chem', 'bio', 'math', 'break', 'econs', 'econs', 'bio', 'geo'],
];

const TimeTable = () => (
  <>
    <EditTimeTable />
    <div className="mt-6">
      <SideHeaderTable
        topHeaders={topHeader}
        content={content}
        sideHeader={sideHeader}
      />
    </div>
  </>
);

export default TimeTable;
