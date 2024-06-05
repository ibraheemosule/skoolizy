import { memo } from 'react';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewTeacher = ({ closeModal }: { closeModal: () => void }) => {
  const [teacher, setTeacher, teacherList, teacherFilterFn] =
    useCustomField<string>('', ['mrs bisi', 'mr tolu', 'mr ayo']);
  return (
    <Modal
      size="sm"
      title="Add teacher to a subject"
      content={
        <div className="pb-6">
          <CustomField
            filterFn={teacherFilterFn}
            field="input"
            value={teacher}
            onChange={setTeacher}
            placeholder="Select Teacher(s)"
            icon={null}
          >
            <CustomField.DropdownWrapper>
              {teacherList.map((s) => (
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

export default memo(NewTeacher);
