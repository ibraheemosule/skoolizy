import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewStudent = () => {
  const [email, setEmail] = useCustomField<string>('');
  const [classroom, setClassroom] = useCustomField<string>('');
  return (
    <>
      <div>
        <CustomField
          field="input"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Input student's email address"
          icon={null}
        />
      </div>
      <div className="mt-4">
        <CustomField field="select" value={classroom} onSelect={setClassroom}>
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown value="jss-1">JSS 1</CustomField.Dropdown>
            <CustomField.Dropdown value="jss-2">JSS 2</CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </>
  );
};

export default NewStudent;
