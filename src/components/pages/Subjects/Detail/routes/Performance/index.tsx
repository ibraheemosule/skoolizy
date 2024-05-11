import CustomTable from '~reusables/custom-table/CustomTable';
import PerformanceOptions from './Options';

const topHeader = ['Student', 'Grade'];

const content = [
  ['john doe', 0],
  ['john doe', 0],
  ['john doe', 0],
  ['john doe', 0],
  ['john doe', 0],
  ['john doe', 0],
  ['john doe', 0],
];

const Performance = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex flex-col md:h-full md:overflow-hidden">
        <PerformanceOptions />

        <div className="mt-6 grow h-[70vh] md:h-auto overflow-auto">
          <CustomTable
            header={topHeader}
            content={content}
            minWidth="min-w-[300px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Performance;
