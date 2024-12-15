import { useState } from 'react';
import FilterPerformance from './Filter';
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
