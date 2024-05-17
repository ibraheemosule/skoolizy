import AttendanceOptions from './Options';
import SideHeaderTable from '~components/reusables/custom-table/SideHeaderTable';

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

const Attendance = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex flex-col md:h-full md:overflow-hidden">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="font-semibold text-lg text-gray-600">
              Absence Count - 4 days
            </p>
          </div>
          <AttendanceOptions />
        </div>

        <div className="mt-8 grow h-[70vh] md:h-auto overflow-auto">
          {/* <CustomTable header={top} content={con} minWidth="min-w-[300px]" /> */}
          <div className="mt-6">
            <SideHeaderTable
              topHeaders={topHeader}
              content={content}
              sideHeader={sideHeader}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Attendance;
