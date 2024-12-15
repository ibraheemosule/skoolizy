import { useState } from 'react';
import ListOptions from '~components/reusables/ListOptions';
import FilterStaffs from '../FilterStudent';
import Pagination from '~reusables/Pagination';

import useFilter from '~reusables/hooks/useFilter';

type TStaffOption = {
  page?: number;
  total_items?: number;
  total_pages?: number;
};

export default function StaffsOption(paginate: TStaffOption) {
  const [modal, setModal] = useState('');
  const filter = useFilter();

  const filterStaffs = (arg: { [key: string]: string | number } = {}) =>
    filter({ ...arg });

  return (
    <>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Pagination
          page={paginate?.page}
          totalPage={paginate?.total_pages}
          items={paginate?.total_items}
          filterAction={filterStaffs}
          type="students"
        />
        <div className="ml-auto grid">
          <ListOptions onManageClick={() => setModal('filter')} />
        </div>
      </div>

      {modal === 'filter' && <FilterStaffs closeModal={() => setModal('')} />}
    </>
  );
}
