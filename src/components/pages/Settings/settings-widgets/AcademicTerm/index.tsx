import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { ListItemEditModal } from '~reusables/List/EditListItemModal';
import { BaseBtn } from '~reusables/ui/Buttons';
import { BoldText } from '~reusables/ui/Text';
import { List, ListItem } from '~reusables/List/List';
import { dateToDbFormat } from '~utils/format';
import { dateType } from './u-academic-term';

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
        {dateType.map((val, i) => {
          const dateText = !i ? 'start date' : 'end date';
          return (
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
                    <ListItemEditModal
                      close={() => handleModal(val)}
                      value={dateToDbFormat(date[val]) ?? 'N/A'}
                      field={dateText}
                    >
                      <div>
                        <p>{dateText.padEnd(dateText.length + 2, ' : ')}</p>
                        <DateTimePicker
                          format="dd/MM/yyyy"
                          dayPlaceholder="DD"
                          monthPlaceholder="MM"
                          yearPlaceholder="YYYY"
                          calendarIcon={null}
                          onChange={(arg: Date | null) => handleDate(val, arg)}
                          value={date[val]}
                        />
                      </div>
                    </ListItemEditModal>
                  )}
                </div>
              }
              description={
                <p>{date[val] ? dateToDbFormat(date[val]) : 'N/A'}</p>
              }
            />
          );
        })}
      </List>
    </>
  );
};
export default AcademicTerm;
