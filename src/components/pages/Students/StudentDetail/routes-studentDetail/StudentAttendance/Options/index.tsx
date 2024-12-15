import { useState } from 'react';
import FiterAbsenceDate from './FilterStudentAttendance';
import ReportAbsence from '~components/reusables/ReportAbsence';
import ListOptions from '~components/reusables/ListOptions';

const PerformanceOptions = () => {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
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
