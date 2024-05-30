import { memo, useState } from 'react';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import Modal from '~reusables/Modal';
import { BoldText } from '~components/reusables/ui/Text';

const testing = ['everyone', 'parents', 'teachers', 'students'];

const NewAnnouncement = ({ closeModal }: { closeModal: () => void }) => {
  const [type, setType] = useState('memo');
  const [announcement, setAnnouncement] = useCustomField('');
  const [value, setValue, list, filterFn] = useCustomField<string[]>(
    [],
    testing
  );
  const [reminder, setReminder, reminderList] = useCustomField('', [
    'None',
    'daily',
    'Every Two days',
    'Every week',
  ]);
  const [startDate, setStartDate] = useCustomField('');
  const [endDate, setEndDate] = useCustomField('');

  return (
    <Modal
      size="md"
      title="Make a new announcement"
      action={() => null}
      actionText="Send Announcement"
      fixedActionBtn
      content={
        <div className="pb-8">
          <div>
            <BoldText>Title:</BoldText>
            <div className="mt-1">
              <CustomField
                onChange={(v) => setAnnouncement(v)}
                field="input"
                value={announcement}
                placeholder="Type announcement title"
                icon={null}
              />
            </div>
          </div>

          <div className="mt-4">
            <BoldText>Details:</BoldText>
            <div className="mt-1">
              <textarea
                placeholder="Type more details about announcement here..."
                className="w-full outline-none resize-none h-28 bg-gray-100 p-2 rounded-lg"
                maxLength={200}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center mt-4 gap-4 gap-x-6 sm:justify-end">
              <label className="w-full sm:w-auto" htmlFor="memo">
                <input
                  id="memo"
                  type="radio"
                  className="cursor-pointer mr-2"
                  name="announcement-type"
                  checked={type === 'memo'}
                  value={type}
                  onChange={() => setType('memo')}
                />
                Memo
              </label>

              <label className="w-full sm:w-auto" htmlFor="one-day">
                <input
                  id="one-day"
                  type="radio"
                  className="cursor-pointer mr-2"
                  name="announcement-type"
                  value={type}
                  onChange={() => setType('one-day')}
                />
                Single Day Event
              </label>

              <label className="w-full sm:w-auto" htmlFor="multi-day">
                <input
                  id="multi-day"
                  type="radio"
                  className="cursor-pointer mr-2"
                  name="announcement-type"
                  value={type}
                  onChange={() => setType('multi-day')}
                />
                Multi-day Event
              </label>
            </div>
          </div>

          <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
            {type !== 'memo' && (
              <div className="w-[150px]">
                <BoldText>{type === 'multi-day' && 'Start '}Date:</BoldText>
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

            {type === 'multi-day' && (
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
                  value={value}
                  onSelect={setValue}
                  field="select"
                  filterFn={filterFn}
                >
                  <CustomField.DropdownWrapper width={100}>
                    {list.map((name) => (
                      <CustomField.Dropdown key={name} value={name}>
                        {name}
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
