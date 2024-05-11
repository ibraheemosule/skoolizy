import CustomTable from '~reusables/custom-table/CustomTable';

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
  <section className="flex _full flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full shrink-0 overflow-auto">
      <div>
        <CustomTable
          header={topHeader}
          content={content}
          minWidth="min-w-[300px]"
        />
      </div>
    </div>
  </section>
);

export default Performance;
