import { useState } from 'react';
import FilterPerformance from './FilterStudentPerformance';
import ListOptions from '~components/reusables/ListOptions';

const PerformanceOptions = () => {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions onManageClick={() => setModal('filter')} />
      {modal === 'filter' && (
        <FilterPerformance closeModal={() => setModal('')} />
      )}
    </>
  );
};

export default PerformanceOptions;
