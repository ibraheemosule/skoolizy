import { useState } from 'react';
import ListOptions from '~components/reusables/ListOptions';
import FilterGuardians from '../FilterGuardians';
import Pagination from '~reusables/Pagination';

import useFilter from '~reusables/hooks/useFilter';

type TGuardiansOption = {
  page?: number;
  total_items?: number;
  total_pages?: number;
};

export default function GuardianssOption(paginate: TGuardiansOption) {
  const [modal, setModal] = useState('');
  const filter = useFilter();

  const filterGuardians = (arg: { [key: string]: string | number } = {}) =>
    filter({ ...arg });

  return (
    <>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Pagination
          page={paginate?.page}
          totalPage={paginate?.total_pages}
          items={paginate?.total_items}
          filterAction={filterGuardians}
          type="guardians"
        />
        <div className="ml-auto grid">
          <ListOptions
            onManageClick={() => setModal('filter')}
            actionText="Add a new guardians"
          />
        </div>
      </div>

      {modal === 'filter' && (
        <FilterGuardians closeModal={() => setModal('')} />
      )}
    </>
  );
}
