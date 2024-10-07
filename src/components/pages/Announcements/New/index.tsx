import { memo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DateTimePicker from 'react-datetime-picker';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';
import { HorizontalNav } from '~components/reusables/Menu';
import { BoldText } from '~components/reusables/ui/Text';
import { recipientsList, reminders, navRouting } from './u-new';
import Api from '~api';
import { dateToDbFormat, formatDate } from '~utils/format';

const { api } = new Api();

const NewAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const [type, setType] = useCustomField<
    'single_event' | 'multi_event' | 'memo'
  >('memo');
  const [title, setTitle] = useCustomField('');
  const [message, setMessage] = useCustomField('');
  const [recipient, setRecipient] = useCustomField<
    'all' | 'parents' | 'students' | 'teachers'
  >('all');
  const [reminder, setReminder, reminderList] = useCustomField(
    '',
    Object.keys(reminders)
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [eventTime, setEventTime] = useState<Date | null>(null);

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () =>
      api.postAnnouncement({
        title,
        message,
        ...(type !== 'memo' && {
          event_start_date: dateToDbFormat(startDate) || '',
          reminder: reminders[reminder as keyof typeof reminders],
        }),
        ...(type === 'multi_event' && {
          event_end_date: dateToDbFormat(endDate) || '',
        }),
        ...(type === 'single_event' && {
          event_time: formatDate(String(eventTime), 24).getTime,
        }),
        recipient,
        type,
      }),
    onSuccess: async () =>
      queryClient.invalidateQueries({
        queryKey: ['announcements'],
      }),
  });

  const nav = {
    Memo: () => setType('memo'),
    'Single-day event': () => setType('single_event'),
    'Multi-day event': () => setType('multi_event'),
  };

  return (
    <Modal
      size="md"
      title="Make a new announcement"
      action={async () => mutateAsync()}
      close={() => closeModal()}
      actionText="Send Announcement"
      fixedActionBtn
      content={
        <div className="pb-8 mt-6">
          <HorizontalNav nav={nav} active={navRouting[type]} />
          <div className="mt-4">
            <BoldText>Title:</BoldText>
            <div className="mt-1">
              <CustomField
                onChange={setTitle}
                field="input"
                value={title}
                placeholder={`Type ${type.split('_').join(' ')} title`}
                icon={null}
              />
            </div>
          </div>

          <div className="mt-4">
            <BoldText>Message {type !== 'memo' && '(Optional)'}:</BoldText>
            <div className="mt-1">
              <textarea
                placeholder="Type Message here..."
                className="w-full outline-none resize-none h-28 bg-gray-100 p-2 rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="flex mt-4 gap-4 flex-wrap">
            {type !== 'memo' && (
              <div className="w-[150px]">
                <BoldText>{type === 'multi_event' && 'Start '}Date:</BoldText>
                <div className="mt-1">
                  <DateTimePicker
                    format="dd/MM/yyyy"
                    dayPlaceholder="DD"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                    calendarIcon={null}
                    onChange={(arg: Date | null) => setStartDate(arg)}
                    value={startDate}
                  />
                </div>
              </div>
            )}

            {type === 'multi_event' && (
              <div className="w-[150px]">
                <BoldText>End Date:</BoldText>
                <div className="mt-1">
                  <DateTimePicker
                    format="dd/MM/yyyy"
                    dayPlaceholder="DD"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                    calendarIcon={null}
                    onChange={(arg: Date | null) => setEndDate(arg)}
                    value={endDate}
                  />
                </div>
              </div>
            )}

            {type === 'single_event' && (
              <div className="w-[150px]">
                <BoldText>Time of Event:</BoldText>
                <div className="mt-1">
                  <DateTimePicker
                    format="hh:mm a"
                    hourPlaceholder="HH"
                    minutePlaceholder="MM"
                    calendarIcon={null}
                    onChange={(arg: Date | null) => setEventTime(arg)}
                    value={eventTime}
                  />
                </div>
              </div>
            )}

            {type !== 'memo' && (
              <div className="w-[150px]">
                <BoldText>Reminder:</BoldText>
                <div className="mt-1">
                  <CustomField
                    placeholder="Set Reminder"
                    value={reminder}
                    onSelect={setReminder}
                    field="select"
                  >
                    <CustomField.DropdownWrapper width={100}>
                      {reminderList.map((name) => (
                        <CustomField.Dropdown key={name} value={name}>
                          {name}
                        </CustomField.Dropdown>
                      ))}
                    </CustomField.DropdownWrapper>
                  </CustomField>
                </div>
              </div>
            )}

            <div className="w-[150px]">
              <BoldText>Recipient:</BoldText>
              <div className="mt-1">
                <CustomField
                  placeholder="Recipients"
                  value={recipient}
                  onSelect={setRecipient}
                  field="select"
                >
                  <CustomField.DropdownWrapper width={100}>
                    {recipientsList.map((name) => (
                      <CustomField.Dropdown key={name} value={name}>
                        <span className="capitalize block p-2">{name}</span>
                      </CustomField.Dropdown>
                    ))}
                  </CustomField.DropdownWrapper>
                </CustomField>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default memo(NewAnnouncement);
