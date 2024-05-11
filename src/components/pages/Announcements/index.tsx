import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import NewAnnouncement from './New';
import FilterAnnouncements from './Filter';
import { formatDate } from '~utils/format';
import ViewAnnouncement from './View';
import ListOptions from '~components/reusables/ListOptions';

const Announcements = () => {
  const [modal, setModal] = useState('');
  const [view, setView] = useState('');

  return (
    <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'new' && (
            <NewAnnouncement closeModal={() => setModal('')} />
          )}
          {modal === 'filter' && (
            <FilterAnnouncements closeModal={() => setModal('')} />
          )}
          {view && (
            <ViewAnnouncement view={view} closeModal={() => setView('')} />
          )}
          <div className="mt-8">
            <ListOptions
              onManageClick={() => setModal('filter')}
              onActionClick={() => setModal('new')}
              actionText="New announcement"
            />
          </div>

          <div className="mt-6 pb-8 grow md:h-auto overflow-auto">
            <BaseBtn
              onClick={() => setView('annoucement')}
              className="mt-4 p-2 w-full hover:translate-y-0.5 flex gap-4 justify-between bg-gray-100 text-gray-600 items-start rounded-lg"
            >
              <h4 className="flex gap-2 items-center font-semibold">
                <Icon name="info" stroke="white" fill="gray" />
                <span>Examamination is starting next week monday</span>
              </h4>
              <div className="flex flex-col">
                <small>{formatDate().getDate}</small>
                <small>{formatDate().getTime}</small>
              </div>
            </BaseBtn>
            <BaseBtn
              onClick={() => setView('annoucement')}
              className="mt-4 p-2 w-full hover:translate-y-0.5 flex gap-4 justify-between bg-gray-100 text-gray-600 items-start rounded-lg"
            >
              <h4 className="flex gap-2 items-center font-semibold">
                <Icon name="info" stroke="white" fill="gray" />
                <span>Examamination is starting next week monday</span>
              </h4>
              <div className="flex flex-col">
                <small>{formatDate().getDate}</small>
                <small>{formatDate().getTime}</small>
              </div>
            </BaseBtn>
            <BaseBtn
              onClick={() => setView('annoucement')}
              className="mt-4 p-2 w-full hover:translate-y-0.5 flex gap-4 justify-between bg-gray-100 text-gray-600 items-start rounded-lg"
            >
              <h4 className="flex gap-2 items-center font-semibold">
                <Icon name="info" stroke="white" fill="gray" />
                <span>Examamination is starting next week monday</span>
              </h4>
              <div className="flex flex-col">
                <small>{formatDate().getDate}</small>
                <small>{formatDate().getTime}</small>
              </div>
            </BaseBtn>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto grow overflow-auto">
        <AsideAdmin />
      </div>
    </section>
  );
};

export default Announcements;
