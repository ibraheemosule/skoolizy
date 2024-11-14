import { memo } from 'react';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewStaff = ({ closeModal }: { closeModal: () => void }) => {
  const [staff, setStaff, staffList, staffFilterFn] = useCustomField<string>(
    '',
    ['mrs bisi', 'mr tolu', 'mr ayo']
  );
  return (
    <Modal
      size="sm"
      title="Add staff to a subject"
      content={
        <div className="pb-6">
          <CustomField
            filterFn={staffFilterFn}
            field="input"
            value={staff}
            onChange={setStaff}
            placeholder="Select Staff(s)"
            icon={null}
          >
            <CustomField.DropdownWrapper>
              {staffList.map((s) => (
                <CustomField.Dropdown key={s} value={s}>
                  {s}
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      }
      action={() => null}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(NewStaff);
