import { useState } from 'react';
import FilterPerformance from './Filter';
import ListOptions from '~components/reusables/ListOptions';
import { BoldText } from '~components/reusables/ui/Text';
import CustomField from '~components/reusables/CustomField';
import useCustomField from '~components/reusables/CustomField/hooks-custom-field/useCustomField';

const PerformanceOptions = () => {
  const [modal, setModal] = useState('');
  const [subject, setSubject, subjectList] = useCustomField('', [
    'English',
    'Math',
    'Biology',
  ]);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <BoldText>Subject:</BoldText>
          <div>
            <CustomField value={subject} onSelect={setSubject} field="select">
              <CustomField.DropdownWrapper>
                {subjectList.map((sub) => (
                  <CustomField.Dropdown key={sub} value={sub}>
                    {sub}
                  </CustomField.Dropdown>
                ))}
              </CustomField.DropdownWrapper>
            </CustomField>
          </div>
        </div>
        <ListOptions onManageClick={() => setModal('filter')} />
      </div>
      {modal === 'filter' && (
        <FilterPerformance closeModal={() => setModal('')} />
      )}
    </>
  );
};

export default PerformanceOptions;
