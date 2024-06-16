import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import NewAnnouncement from './New';
import FilterAnnouncements from './Filter';
import { capitalizeChar, formatDate } from '~utils/format';
import ViewAnnouncement from './View';
import ListOptions from '~components/reusables/ListOptions';
import Api from '~api';

const { api } = new Api();

const Announcements = () => {
  const { state } = useLocation();
  const search = state?.search || '';
  const type = state?.type || '';
  const [modal, setModal] = useState('');
  const [view, setView] = useState('');

  const { data } = useQuery({
    queryKey: ['ANNOUNCEMENTS', search, type],
    queryFn: () => api.getAllAnnouncements({ search, type }),
  });

  const annoucements = data?.data;

  return (
    <section
      data-testid="announcements-page"
      className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto"
    >
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
            {annoucements?.map((a) => (
              <BaseBtn
                testId="annoucement"
                key={Math.random()}
                onClick={() => setView('annoucement')}
                className="mt-4 p-2 w-full hover:translate-y-0.5 flex gap-4 justify-between bg-gray-100 text-gray-600 items-start rounded-lg"
              >
                <h4 className="flex gap-2 items-center text-left font-semibold">
                  <Icon
                    name="info"
                    stroke="white"
                    fill="gray"
                    style={{ alignSelf: 'flex-start', marginTop: 2 }}
                  />
                  <div>
                    <p className="first-letter:uppercase">{a.title}</p>
                    <div>
                      <span className="text-xs tracking-tight font-semibold">
                        {capitalizeChar(a.type.split('_')[0])}{' '}
                        {a.type.split('_')[1]} for {a.recipient}
                      </span>
                    </div>
                  </div>
                </h4>
                <div className="flex flex-col mt-0.5">
                  <small>{formatDate(a.date_created).getDate}</small>
                  <small>{formatDate(a.date_created).getTime}</small>
                </div>
              </BaseBtn>
            ))}
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
