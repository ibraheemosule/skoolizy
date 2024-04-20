import { memo } from 'react';
import CustomTable from 'components/reusables/custom-table/CustomTable';
import CustomField from 'components/reusables/custom-field';

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

const formatContent = content.map(([v, s]) => [
  v,
  <div key={Math.random()} className="w-[70px] mx-auto">
    <CustomField field="input" value={s} />
  </div>,
]);

const ScoreBoard = () => (
  <div className="max-w-">
    <CustomTable
      header={topHeader}
      content={formatContent}
      minWidth="min-w-[300px]"
    />
  </div>
);

export default memo(ScoreBoard);
