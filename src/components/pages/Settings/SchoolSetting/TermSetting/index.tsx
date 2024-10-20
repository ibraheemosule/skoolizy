import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from '~components/reusables/Modal';
import { ListItem } from '~reusables/List/List';
import { ActionBtn } from '~reusables/ui/Buttons';
import { formatDate } from '~utils/format';

const dateType = ['Start Date', 'End Date'] as const;

type TDateType = (typeof dateType)[number];

const TermSetting = () => {
  const [date, setDate] = useState({} as { [key in TDateType]: Date | null });
  const [isModalOpen, setIsModalOpen] = useState(
    {} as { [key in TDateType]: boolean }
  );

  function handleDate(val: TDateType, arg: Date | null) {
    setDate((prevDate) => ({
      ...prevDate,
      [val]: arg,
    }));
  }

  function handleModal(val: TDateType) {
    setIsModalOpen((prevModal) => ({
      ...prevModal,
      [val]: !prevModal[val],
    }));
  }

  return (
    <>
      {dateType.map((val) => (
        <ListItem
          key={val}
          title={val}
          action={
            <div>
              <div className="flex gap-4 justify-center">
                <ActionBtn
                  onClick={() => handleModal(val)}
                  className=" text-purple.dark hover:-translate-y-0.5 disabled:opacity-25 disabled:hover:-translate-y-0 disabled:cursor-not-allowed"
                  disabled={val === 'End Date' && !date['Start Date']}
                >
                  Edit
                </ActionBtn>
              </div>
              {isModalOpen[val] && (
                <Modal
                  size="sm"
                  scroll={false}
                  action={() => handleModal(val)}
                  title={`Update ${val}`}
                  close={() => {
                    handleModal(val);
                  }}
                  actionText="Update"
                  content={
                    <div className="mt-4">
                      <DateTimePicker
                        format="dd/MM/yyyy"
                        minDate={
                          val === 'Start Date'
                            ? new Date()
                            : new Date(date['Start Date'] as Date)
                        }
                        className="mb-2"
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                        calendarIcon={null}
                        onChange={(arg: Date | null) => {
                          handleDate(val, arg);
                        }}
                        value={date[val]}
                      />
                    </div>
                  }
                />
              )}
            </div>
          }
          description={
            <p>{date[val] ? formatDate(String(date[val])).getDate : 'N/A'}</p>
          }
        />
      ))}
    </>
  );
};

export default TermSetting;
