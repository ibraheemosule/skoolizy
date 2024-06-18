import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import useFilter from '~components/reusables/hooks/useFilter';
import { BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import NewAnnouncement from './New';
import FilterAnnouncements from './Filter';
import { capitalizeChar, formatDate } from '~utils/format';
import ViewAnnouncement from './View';
import ListOptions from '~components/reusables/ListOptions';
import Api from '~api';
import SkeletonLoader from '~components/reusables/SkeletonLoader';
import Pagination from '~components/reusables/Pagination';

const { api } = new Api();

const Announcements = () => {
  const filter = useFilter();
  const { state } = useLocation();
  const search = state?.search || '';
  const type = state?.type || '';
  const page = state?.page || 1;
  const fromDate = state?.from_date || '';
  const toDate = state?.to_date || '';
  const eventDays = state?.event_days || '';
  const [modal, setModal] = useState('');
  const [view, setView] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: [
      'ANNOUNCEMENTS',
      search,
      type,
      page,
      eventDays,
      fromDate,
      toDate,
    ],
    queryFn: () => api.getAllAnnouncements(state),
    placeholderData: keepPreviousData,
  });

  const annoucements = data?.data;

  const filterAnnouncements = (arg: { [key: string]: string | number } = {}) =>
    filter({ ...arg });

  return (
    <section
      data-testid="announcements-page"
      className="flex _full max-h-full gap-6 overflow-auto"
    >
      <div className="w-full min-h-full shrink-0">
        <div className="flex flex-col h-full overflow-hidden">
          {modal === 'new' && (
            <NewAnnouncement closeModal={() => setModal('')} />
          )}
          {modal === 'filter' && (
            <FilterAnnouncements
              action={filterAnnouncements}
              closeModal={() => setModal('')}
            />
          )}
          {view && (
            <ViewAnnouncement view={view} closeModal={() => setView('')} />
          )}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Pagination
              page={data?.page}
              totalPage={data?.total_pages}
              items={data?.total_items}
              filterAction={filterAnnouncements}
              type="announcements"
            />
            <div className="ml-auto">
              <ListOptions
                onManageClick={() => setModal('filter')}
                onActionClick={() => setModal('new')}
                actionText="New announcement"
              />
            </div>
          </div>

          <div className="mt-6 pb-8 grow md:h-auto overflow-auto">
            {isLoading ? (
              <SkeletonLoader type="text" />
            ) : (
              annoucements?.map((a) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
