import { useState } from 'react';
import FiterAbsenceDate from './Filter';
import ReportAbsence from './ReportAbsence';
import ListOptions from '~components/reusables/ListOptions';

const PerformanceOptions = () => {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onManageClick={() => setModal('filter')}
        manageText="Filter by date range"
        onActionClick={() => setModal('absent')}
        actionText="Report Absence"
      />
      {modal === 'filter' && (
        <FiterAbsenceDate closeModal={() => setModal('')} />
      )}
      {modal === 'absent' && <ReportAbsence closeModal={() => setModal('')} />}
    </>
  );
};

export default PerformanceOptions;
