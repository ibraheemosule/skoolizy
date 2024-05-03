import { useEffect } from 'react';
import { ActionBtn, BaseBtn } from '~reusables/ui/Buttons';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import { capitalizeChar } from '~utils/format';
import Modal from '~reusables/Modal';

type TEditInfo = {
  value: string;
  updateValue: (arg: string) => void;
  close: () => void;
  field: string;
};

const selectOptions = {
  gender: ['male', 'female'],
  marital_status: ['single', 'married', 'divorced'],
};

const reqAuth = ['email_address', 'phone_number'];

const reqSearch = ['current_location'];

const SimpleEdit = ({ value, updateValue, close, field }: TEditInfo) => {
  const [newValue, setNewValue] = useCustomField(value);

  useEffect(() => updateValue(newValue), [newValue]);

  const dropdown =
    selectOptions[field as unknown as keyof typeof selectOptions];

  return (
    <Modal
      close={close}
      title={`Are you sure you want to update ${capitalizeChar(
        field
      ).toLowerCase()}`}
      content={
        <>
          <CustomField
            value={newValue}
            {...(dropdown
              ? {
                  field: 'select',
                  onSelect: setNewValue,
                  children: (
                    <CustomField.DropdownWrapper>
                      {dropdown.map((v) => (
                        <CustomField.Dropdown key={v} value={v}>
                          <span className="capitalize block p-2">{v}</span>
                        </CustomField.Dropdown>
                      ))}
                    </CustomField.DropdownWrapper>
                  ),
                }
              : {
                  field: 'input',
                  placeholder: 'Input New Value...',
                  onChange: setNewValue,
                  icon: null,
                })}
          />
          <ActionBtn className="p-2 w-full mt-6">Update</ActionBtn>
        </>
      }
    />
  );
};

const SearchEdit = ({ value, updateValue, close, field }: TEditInfo) => {
  const [newValue, setNewValue, list, filterListFn] = useCustomField(value, [
    'anoher',
    'lol',
  ]);

  useEffect(() => updateValue(newValue), [newValue]);

  return (
    <Modal
      size="sm"
      close={close}
      title={`Are you sure you want to update ${capitalizeChar(
        field
      ).toLowerCase()}`}
      content={
        <>
          <CustomField
            filterFn={filterListFn}
            value={newValue}
            field="input"
            placeholder={`Enter ${capitalizeChar(field)}`}
            onChange={setNewValue}
          >
            <CustomField.DropdownWrapper>
              {list.map((v) => (
                <CustomField.Dropdown key={v} value={v}>
                  <span className="capitalize block p-2">{v}</span>
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
          <ActionBtn className="p-2 w-full mt-6">Update</ActionBtn>
        </>
      }
    />
  );
};

const AuthEdit = ({ value, updateValue, close, field }: TEditInfo) => {
  const [newValue, setNewValue] = useCustomField(value);
  const [auth, setAuth] = useCustomField('');

  const fieldToEdit = capitalizeChar(field).toLowerCase();
  const title = newValue
    ? `Input the code sent to your new ${fieldToEdit} and password to confirm`
    : `To update ${fieldToEdit}, an OTP will be sent to confirm new ${fieldToEdit}`;

  useEffect(() => updateValue(newValue), [newValue]);

  return (
    <Modal
      size="sm"
      close={close}
      title={title}
      content={
        newValue ? (
          <>
            <CustomField
              value={auth}
              field="input"
              placeholder="Enter OTP"
              onChange={setAuth}
              icon={null}
            />
            <div className="mt-4">
              <CustomField
                value={auth}
                field="input"
                placeholder="Enter Password"
                onChange={setAuth}
                icon={null}
              />
            </div>
            <ActionBtn className="p-2 w-full mt-6">Update</ActionBtn>
          </>
        ) : (
          <div>
            <CustomField
              value={newValue}
              field="input"
              placeholder="Input New Value..."
              onChange={setNewValue}
              icon={null}
            />
            <ActionBtn className="p-2 w-full mt-6">Send OTP</ActionBtn>
            <BaseBtn className="mx-auto block mt-2 text-purple">
              Resend OTP
            </BaseBtn>
          </div>
        )
      }
    />
  );
};

function EditListItemModal({ value, updateValue, close, field }: TEditInfo) {
  if (reqAuth.includes(field)) {
    return (
      <AuthEdit
        value={value}
        updateValue={updateValue}
        close={close}
        field={field}
      />
    );
  }

  if (reqSearch.includes(field)) {
    return (
      <SearchEdit
        value={value}
        updateValue={updateValue}
        close={close}
        field={field}
      />
    );
  }
  return (
    <SimpleEdit
      value={value}
      updateValue={updateValue}
      close={close}
      field={field}
    />
  );
}

export default EditListItemModal;
