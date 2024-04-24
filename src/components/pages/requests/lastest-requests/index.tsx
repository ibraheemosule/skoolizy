import { memo, useState } from 'react';
import { ActionBtn, BaseBtn } from 'components/reusables/ui/buttons';
import Modal from 'components/reusables/modal';
import Icon from 'assets/icons';
import RequestCard from '../../../reusables/request-card';
import NewRequest from './new-request';
import RequestsFilter from './filter-requests';

const Requests = () => {
  const [modal, setModal] = useState('');

  return (
    <div className="flex  flex-col md:h-full md:overflow-hidden">
      {modal === 'newRequest' && (
        <Modal
          title="New Request"
          content={<NewRequest />}
          close={() => setModal('')}
        />
      )}
      {modal === 'filter' && (
        <Modal
          title="Filter Requests"
          content={<RequestsFilter />}
          action={() => null}
          close={() => setModal('')}
          actionText="Filter"
        />
      )}
      <div className="flex flex-wrap justify-end gap-2 mt-8">
        <BaseBtn
          onClick={() => setModal('filter')}
          className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
        >
          Filter Requests <Icon name="filter" height={20} width={20} />
        </BaseBtn>
        <ActionBtn
          onClick={() => setModal('newRequest')}
          className="px-4 py-2 text-purple.dark hover:opacity-50"
        >
          New Request
        </ActionBtn>
      </div>
      <div className="mt-6 pb-8 grow md:h-auto overflow-auto">
        <div className="mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
        <div className=" mt-4 bg-gray-100 rounded-lg">
          <RequestCard />
        </div>
      </div>
    </div>
  );
};

export default memo(Requests);
