import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const NewTeacher = () => {
  const [email, setEmail] = useCustomField<string>('');
  const [subjects, setSubjects, list, filterFn] = useCustomField<string[]>(
    [],
    ['English', 'Math', 'Biology']
  );
  return (
    <>
      <div>
        <CustomField
          field="input"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Input teahcer's email address"
          icon={null}
        />
      </div>
      <div className="mt-4 pb-6">
        <CustomField
          filterFn={filterFn}
          field="select"
          value={subjects}
          onSelect={setSubjects}
        >
          <CustomField.DropdownWrapper>
            {list.map((s) => (
              <CustomField.Dropdown key={s} value={s}>
                {s}
              </CustomField.Dropdown>
            ))}
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </>
  );
};

export default NewTeacher;
