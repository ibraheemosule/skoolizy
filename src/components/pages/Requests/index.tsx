import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import RequestCard from '~reusables/RequestCard';
import NewRequest from './NewRequest';
import RequestsFilter from './FilterRequests';
import ListOptions from '~components/reusables/ListOptions';

const Requests = () => {
  const [modal, setModal] = useState('');

  return (
    <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'new' && <NewRequest closeModal={() => setModal('')} />}
          {modal === 'filter' && (
            <RequestsFilter closeModal={() => setModal('')} />
          )}
          <div className="mt-8">
            <ListOptions
              onManageClick={() => setModal('filter')}
              onActionClick={() => setModal('new')}
              actionText="New Request"
            />
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
