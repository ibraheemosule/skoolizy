import { memo } from 'react';
import Modal from '~reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewSubject = ({ closeModal }: { closeModal: () => void }) => {
  const [topic, setTopic] = useCustomField<string>('');
  const [classroom, setClassroom] = useCustomField<string>('');

  return (
    <Modal
      size="sm"
      title="Add a new subject"
      content={
        <>
          <div className="mt-6">
            <CustomField
              field="input"
              type="email"
              value={topic}
              onChange={setTopic}
              placeholder="Input Subject..."
              icon={null}
            />
          </div>
          <div className="mt-6 pb-4">
            <CustomField
              field="select"
              value={classroom}
              onSelect={setClassroom}
              placeholder="Select Class"
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
export default memo(NewSubject);
