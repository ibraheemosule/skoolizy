import { memo } from 'react';
import CustomTable from 'components/reusables/custom-table/CustomTable';

const RecordScores = () => (
  <div className="max-w-">
    <CustomTable minWidth="min-w-[300px]" />
  </div>
);

export default memo(RecordScores);
