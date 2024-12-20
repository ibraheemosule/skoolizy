import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Dispatch,
  SetStateAction,
  memo,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import Api from '~api';
import Modal from '~components/reusables/Modal';
import { HorizontalNav } from '~components/reusables/Menu';
import CustomField from '~components/reusables/CustomField';
import { BoldText } from '~components/reusables/ui/Text';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';
import { formatDate } from '~utils';
import { Tag } from '~components/reusables/ui/Others';
import { ActionBtn } from '~components/reusables/ui/Buttons';

const { api } = new Api();

type TViewAnnouncement = {
  id: number;
  closeModal: () => void;
};

const nav = (navigate: Dispatch<SetStateAction<string>>) => ({
  Information: () => navigate('information'),
  'Edit Event': () => navigate('edit event'),
});

const ViewAnnouncement = ({ id, closeModal }: TViewAnnouncement) => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useCustomField('');
  const [message, setMessage] = useCustomField('');
  const [fromDate, setFromDate] = useCustomField('');
  const [toDate, setToDate] = useCustomField('');
  const [eventTime, setEventTime] = useCustomField('');
  const [active, setActive] = useState('information');

  const { data, isLoading } = useQuery({
    queryKey: [`announcements_${id}`],
    queryFn: () => api.getAnnouncement(id),
  });
  const isEditable =
    data?.data.announcement_type !== 'memo' &&
    new Date(data?.data.event_start_date || '') > new Date();

  const { mutateAsync: deleteAnnouncement } = useMutation({
    mutationFn: () => api.deleteAnnouncement(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['announcements'],
      }),
  });

  const newData = useMemo(
    () => ({
      ...(data?.data.title !== title && {
        title,
      }),

      ...(data?.data.message !== message && {
        message,
      }),

      ...(data?.data.announcement_type !== 'memo' &&
        String(data?.data.event_start_date) !== fromDate && {
          event_start_date: fromDate,
        }),

      ...(data?.data.announcement_type === 'multi_event' &&
        String(data?.data.event_end_date) !== toDate && {
          event_end_date: toDate,
        }),

      ...(data?.data.announcement_type === 'single_event' &&
        String(data?.data.event_time) !== eventTime && {
          event_time: `${eventTime}:00`,
        }),
    }),
    [title, message, fromDate, toDate, eventTime]
  );

  const { mutateAsync: updateAnnouncement } = useMutation({
    mutationFn: () => api.updateAnnouncement(id, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['announcements', `announcements_${id}`],
      });
    },
  });

  useEffect(() => {
    if (data && isEditable) {
      setTitle(data.data.title);
      setMessage(String(data.data.message));

      if (data?.data.announcement_type !== 'memo') {
        setFromDate(String(data.data.event_start_date));
      }

      if (data?.data.announcement_type === 'multi_event') {
        setToDate(String(data.data.event_end_date));
      }

      if (data?.data.announcement_type === 'single_event') {
        setEventTime(String(data.data.event_time));
      }
    }
  }, [data?.data]);

  return (
    <Modal
      size="md"
      isLoading={isLoading}
      title={
        <div className="flex flex-col gap-1 capitalize">
          <h3 data-testid="announcement-title">{data?.data.title}</h3>
          <Link
            to={`/staffs/${data?.data.created_by.tag}`}
            className="text-gray-500 text-sm border-b pb-3"
          >
            By {data?.data.created_by.title} {data?.data.created_by.first_name}
          </Link>
          {isEditable && (
            <>
              <div className="flex mt-4 gap-6 sm:gap-6 gap-y-4 flex-wrap border-b pb-3">
                {data?.data.announcement_type !== 'memo' &&
                  data?.data.event_start_date && (
                    <div className="flex flex-col">
                      <small className="text-xs font-bold">Event Starts</small>
                      <small className="text-sm text-gray-500">
                        {formatDate(data?.data.event_start_date || '').getDate}
                      </small>
                    </div>
                  )}
                {data?.data.announcement_type === 'multi_event' &&
                  data?.data.event_end_date && (
                    <div className="flex flex-col">
                      <small className="text-xs font-bold">Event Ends</small>
                      <small className="text-sm text-gray-500">
                        {formatDate(data.data.event_end_date || '').getDate}
                      </small>
                    </div>
                  )}
                {data?.data.announcement_type === 'single_event' &&
                  data?.data.event_time && (
                    <div className="flex flex-col">
                      <small className="text-xs font-bold">Time of Event</small>
                      <small className="text-sm text-gray-500">
                        {formatDate(data?.data.event_time || '').getTime}
                      </small>
                    </div>
                  )}
                {data?.data.reminder && active === 'edit event' && (
                  <div className=" self-start sm:ml-auto">
                    <ActionBtn className="p-0 bg-transparent">
                      <Tag className="font-semibold text-sm p-1 rounded-md">
                        Stop reminder
                      </Tag>
                    </ActionBtn>
                  </div>
                )}
              </div>
              <div className="mt-4 text-base">
                <HorizontalNav nav={nav(setActive)} active={active} />
              </div>
            </>
          )}
        </div>
      }
      content={
        <div data-testid="announcement-modal" className="py-6">
          {active === 'edit event' && (
            <div>
              <div className="mt-1">
                <BoldText>Title:</BoldText>
                <div className="mt-1">
                  <CustomField
                    onChange={setTitle}
                    field="input"
                    value={title}
                    icon={null}
                  />
                </div>
              </div>

              <div className="mt-4">
                <BoldText>Message:</BoldText>
                <div className="mt-1">
                  <textarea
                    placeholder="Type Message here..."
                    className="w-full outline-none resize-none h-28 bg-gray-100 p-2 rounded-lg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4">
                <BoldText>Event Start Date:</BoldText>
                <div className="mt-1">
                  <CustomField
                    type="date"
                    onChange={setFromDate}
                    field="input"
                    value={fromDate}
                  />
                </div>
              </div>

              {data?.data.announcement_type === 'multi_event' &&
                data?.data.event_end_date && (
                  <div className="mt-4">
                    <BoldText>Event End Date:</BoldText>
                    <div className="mt-1">
                      <CustomField
                        type="date"
                        onChange={setToDate}
                        field="input"
                        value={toDate}
                      />
                    </div>
                  </div>
                )}

              {data?.data.announcement_type === 'single_event' &&
                data?.data.event_time && (
                  <div className="mt-4">
                    <BoldText>Time of Event:</BoldText>
                    <div className="mt-1">
                      <CustomField
                        placeholder="Recipients"
                        value={eventTime}
                        onChange={setEventTime}
                        field="input"
                        type="time"
                        icon={null}
                      />
                    </div>
                  </div>
                )}
            </div>
          )}
          {active === 'information' && isEditable && (
            <h3 className="font-bold">Message</h3>
          )}
          {active === 'information' && (
            <p className="first-letter:uppercase">{data?.data.message}</p>
          )}
        </div>
      }
      close={() => closeModal()}
      {...(isEditable && {
        action: async () =>
          (active === 'information'
            ? deleteAnnouncement
            : updateAnnouncement)(),
      })}
      fixedActionBtn
      actionText={active === 'information' ? 'Delete' : 'Update Event'}
      disableActionBtn={
        active !== 'information' && !Object.keys(newData).length
      }
    />
  );
};

export default memo(ViewAnnouncement);
