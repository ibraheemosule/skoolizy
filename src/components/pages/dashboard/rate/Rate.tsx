import { memo, useState } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import CustomField from 'components/reusables/custom-field/CustomField';

const Rate = () => {
  const [name, setName] = useState('');
  return (
    <div className="mt-8 md:mt-6">
      <BoldText>Rate a Student</BoldText>
      <div className="flex gap-2 mt-3">
        <div className="grow">
          <CustomField>
            <>
              <CustomField.Field
                search
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown onClick={() => setName('john')}>
                  john
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => setName('bob')}>
                  bob
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => setName('joshua')}>
                  joshua
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => setName('Zarah')}>
                  Zarah
                </CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
        <ActionBtn className="shrink-0 items-start">Submit</ActionBtn>
      </div>
    </div>
  );
};

export default memo(Rate);
