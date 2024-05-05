import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { ActionBtn, BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import RequestCard from '~reusables/RequestCard';
import NewRequest from './NewRequest';
import RequestsFilter from './FilterRequests';

const Requests = () => {
  const [modal, setModal] = useState('');

  return (
    <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'newRequest' && (
            <NewRequest closeModal={() => setModal('')} />
          )}
          {modal === 'filter' && (
            <RequestsFilter closeModal={() => setModal('')} />
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
      </div>
      <div className="w-full lg:w-auto grow overflow-auto">
        <AsideAdmin />
      </div>
    </section>
  );
};

export default Requests;
