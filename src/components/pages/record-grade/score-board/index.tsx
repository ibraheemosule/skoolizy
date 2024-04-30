import { memo } from 'react';
import CustomTable from '~reusables/custom-table/CustomTable';
import CustomField from '~reusables/custom-field';

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
    <CustomField
      onChange={(v: string) => v}
      icon={null}
      field="input"
      value={String(s)}
    />
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
