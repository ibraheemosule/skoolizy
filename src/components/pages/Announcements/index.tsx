import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Api from '~api';
import Icon from '~assets/Icons';
import ListOptions from '~components/reusables/ListOptions';
import Pagination from '~components/reusables/Pagination';
import SkeletonLoader from '~components/reusables/SkeletonLoader';
import EmptyView from '~components/reusables/empty-view';
import useFilter from '~components/reusables/hooks/useFilter';
import { capCharRemoveUnderscore, formatDate } from '~utils';
import FilterAnnouncements from './widgets-announcements/FilterAnnouncements';
import NewAnnouncement from './widgets-announcements/NewAnnouncement';
import ViewAnnouncement from './widgets-announcements/ViewAnnouncement';

const { api } = new Api();

const announcementIcons = {
  multi_event: 'calendarDays',
  single_event: 'calendar',
  memo: 'message',
} as const;

const Announcements = () => {
  const filter = useFilter();
  const { state } = useLocation();
  const search = state?.search || '';
  const type = state?.announcement_type || '';
  const page = state?.page || 1;
  const fromDate = state?.from_date || '';
  const toDate = state?.to_date || '';
  const eventDays = state?.event_days || '';
  const [modal, setModal] = useState('');
  const [view, setView] = useState<number | null>(null);

  const { data, isFetching, refetch, isError } = useQuery({
    queryKey: [
      'announcements',
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
  const announcements = data?.data.list;

  const filterAnnouncements = (arg: { [key: string]: string | number } = {}) =>
    filter({ ...arg });

  return (
    <section
      data-testid="announcements-page"
      className="flex max-h-full gap-6 overflow-auto"
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
            <ViewAnnouncement id={view} closeModal={() => setView(null)} />
          )}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Pagination
              page={data?.data.page}
              totalPage={data?.data.total_pages}
              items={data?.data.total_items}
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
            {isFetching ? (
              <SkeletonLoader type="text" />
            ) : announcements?.length ? (
              announcements?.map((a) => (
                <button
                  data-testid="announcement"
                  key={Math.random()}
                  onClick={() => setView(a.id)}
                  className="mt-4 p-2 w-full hover:translate-y-0.5 flex gap-4 justify-between bg-gray-100 text-gray-600 items-start rounded-lg"
                >
                  <h4 className="flex gap-2 items-center text-left font-semibold">
                    <Icon
                      name={announcementIcons[a.announcement_type]}
                      stroke="white"
                      fill="gray"
                      style={{
                        alignSelf: 'flex-start',
                        marginTop: 2,
                        height: 20,
                        width: 20,
                      }}
                    />
                    <div>
                      <p className="first-letter:uppercase">{a.title}</p>
                      <div>
                        <span className="text-sm text-gray-500 font-semibold">
                          Created on{' '}
                          <small className="font-bold">
                            {formatDate(a.created_at).getDate} -{' '}
                            {formatDate(a.created_at).getTime}
                          </small>
                        </span>
                      </div>
                    </div>
                  </h4>
                  <span className="sr-only">
                    A{' '}
                    {capCharRemoveUnderscore(
                      a.announcement_type.split('_').join(' ')
                    )}{' '}
                    announcement sent to {a.recipient}
                  </span>
                  <span className="capitalize text-sm px-2 py-0.5 bg-purple.light rounded-md  text-gray-500 font-semibold mr-4">
                    {a.recipient} -{' '}
                    {capCharRemoveUnderscore(
                      a.announcement_type.split('_').join(' ')
                    )}
                  </span>
                </button>
              ))
            ) : (
              <EmptyView
                error={isError}
                message={
                  isError
                    ? 'Could not Fetch Announcements'
                    : 'No Announcements yet'
                }
                {...(isError ? { action: refetch } : {})}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
