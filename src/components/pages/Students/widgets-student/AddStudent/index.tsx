import { memo } from 'react';
import Modal from '~reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewStudent = ({ closeModal }: { closeModal: () => void }) => {
  const [email, setEmail] = useCustomField<string>('');
  const [classroom, setClassroom] = useCustomField<string>('');
  return (
    <Modal
      size="sm"
      title="Send an invite link to a student"
      content={
        <>
          <div className="mt-6 pb-4">
            <CustomField
              field="input"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Input student's email address"
              icon={null}
            />
          </div>
          <div className="mt-4 pb-4">
            <CustomField
              field="select"
              value={classroom}
              onSelect={setClassroom}
            >
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown value="jss-1">JSS 1</CustomField.Dropdown>
                <CustomField.Dropdown value="jss-2">JSS 2</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </CustomField>
          </div>
        </>
      }
      action={() => null}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(NewStudent);
