import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from '~components/reusables/Modal';
import { List, ListItem } from '~reusables/List/List';
import { ActionBtn } from '~reusables/ui/Buttons';
import { BoldText } from '~reusables/ui/Text';
import { formatDate } from '~utils/format';

const AcademicTerm = () => {
  const [date, setDate] = useState<{ [key: string]: Date | null }>({});
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  function handleDate(val: string, arg: Date | null) {
    setDate((prevDate) => ({
      ...prevDate,
      [val]: arg,
    }));
  }

  function handleModal(val: string) {
    setIsModalOpen((prevModal) => ({
      ...prevModal,
      [val]: !prevModal[val],
    }));
  }
  return (
    <>
      <div className="py-6 border-b border-gray-100">
        <BoldText>Academic Term</BoldText>
      </div>
      <List>
        {['Start Date', 'End Date'].map((val) => (
          <ListItem
            key={val}
            title={val}
            action={
              <div>
                <ActionBtn
                  className="my-6 sm:m-0 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
                  onClick={() => handleModal(val)}
                  disabled={val === 'End Date' && !date['Start Date']}
                >
                  Edit
                </ActionBtn>
                {isModalOpen[val] && (
                  <Modal
                    size="sm"
                    action={() => handleModal(val)}
                    title={`Update ${val}`}
                    close={() => {
                      handleDate(val, null);
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
                          className="mb-6"
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
      </List>
    </>
  );
};
export default AcademicTerm;
