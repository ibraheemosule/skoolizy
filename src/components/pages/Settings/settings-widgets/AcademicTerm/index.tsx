import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from '~components/reusables/Modal';
import { List, ListItem } from '~reusables/List/List';
import { BaseBtn } from '~reusables/ui/Buttons';
import { BoldText } from '~reusables/ui/Text';
import { formatDate } from '~utils/format';

const AcademicTerm = () => {
  const [date, setDate] = useState<{ [key: string]: Date | null }>({});
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const dateType = ['Start Date', 'End Date'];

  function handleDate(val: string, arg: Date | null) {
    if (!arg) return;
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
        {dateType.map((val, i) => (
          <ListItem
            key={val}
            title={val}
            action={
              <div>
                <BaseBtn
                  className="my-6 sm:m-0 cursor-pointer"
                  onClick={() => handleModal(val)}
                >
                  Edit
                </BaseBtn>
                {isModalOpen[val] && (
                  <Modal
                    size="sm"
                    action={() => handleModal(val)}
                    title={`${dateType[i].padEnd(
                      dateType[i].length + 2,
                      ' : '
                    )}`}
                    close={() => {
                      handleDate(val, null);
                      handleModal(val);
                    }}
                    actionText="Update"
                    content={
                      <DateTimePicker
                        format="dd/MM/yyyy"
                        minDate={
                          i ? new Date(date['Start Date'] as Date) : new Date(0)
                        }
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                        calendarIcon={null}
                        onChange={(arg: Date | null) => {
                          handleDate(val, arg);
                        }}
                        value={date[val]}
                      />
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
