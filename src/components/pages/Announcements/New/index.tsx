import { memo } from 'react';
import { useMutation } from '@tanstack/react-query';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';
import { HorizontalNav } from '~components/reusables/Menu';
import { BoldText } from '~components/reusables/ui/Text';
import Api from '~api';

const { api } = new Api();

const recipientsList = ['all', 'parents', 'teachers', 'students'];
const navRouting = {
  memo: 'Memo',
  single_event: 'Single-day event',
  multi_event: 'Multi-day event',
};

const NewAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const [type, setType] = useCustomField<
    'single_event' | 'multi_event' | 'memo'
  >('memo');
  const [title, setTitle] = useCustomField('');
  const [details, setDetails] = useCustomField('');
  const [recipient, setRecipient] = useCustomField<
    'all' | 'parents' | 'students' | 'teachers'
  >('all');
  const [reminder, setReminder, reminderList] = useCustomField('', [
    'None',
    'daily',
    'Every Two days',
    'Every week',
  ]);
  const [startDate, setStartDate] = useCustomField('');
  const [endDate, setEndDate] = useCustomField('');
  const [eventTime, setEventTime] = useCustomField('');

  const { mutateAsync } = useMutation({
    mutationFn: () =>
      api.postAnnouncement({
        title,
        message: details,
        ...(type !== 'memo' && { event_start_date: startDate }),
        ...(type === 'multi_event' && { event_end_date: endDate }),
        ...(type === 'single_event' && { event_time: `${eventTime}:00` }),
        recipient,
        type,
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
      action={mutateAsync}
      actionText="Send Announcement"
      fixedActionBtn
      content={
        <div className="pb-8">
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
            <BoldText>Details:</BoldText>
            <div className="mt-1">
              <textarea
                placeholder={`Type more details about ${type} here...`}
                className="w-full outline-none resize-none h-28 bg-gray-100 p-2 rounded-lg"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>

          <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
            {type !== 'memo' && (
              <div className="w-[150px]">
                <BoldText>{type === 'multi_event' && 'Start '}Date:</BoldText>
                <div className="mt-1">
                  <CustomField
                    placeholder="Recipients"
                    value={startDate}
                    onChange={setStartDate}
                    field="input"
                    type="date"
                  />
                </div>
              </div>
            )}

            {type === 'multi_event' && (
              <div className="w-[150px]">
                <BoldText>End Date:</BoldText>
                <div className="mt-1">
                  <CustomField
                    placeholder="Recipients"
                    value={endDate}
                    onChange={setEndDate}
                    field="input"
                    type="date"
                  />
                </div>
              </div>
            )}

            {type === 'single_event' && (
              <div className="w-[150px]">
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
      close={() => closeModal()}
    />
  );
};

export default memo(NewAnnouncement);
