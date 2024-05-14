import { memo, useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const ReportAbsence = ({ closeModal }: { closeModal: () => void }) => {
  const [classs, setClasss] = useState('today');
  const [year, setYear] = useCustomField('');

  return (
    <Modal
      size="sm"
      title="Choose day(s) of absence"
      content={
        <div className="text-left mb-4">
          <div className="mt-4">
            <BoldText>Select Day:</BoldText>
            <div className="mt-1">
              <CustomField
                onSelect={(v) => setClasss(v)}
                field="select"
                value={classs}
              >
                <CustomField.DropdownWrapper>
                  {['today', 'more days'].map((opt) => (
                    <CustomField.Dropdown key={opt} value={opt}>
                      <span className="capitalize">{opt}</span>
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>
          {classs !== 'today' && (
            <>
              <div className="mt-4">
                <BoldText>From:</BoldText>
                <div className="mt-1">
                  <CustomField
                    type="date"
                    onChange={setYear}
                    field="input"
                    value={year}
                  />
                </div>
              </div>
              <div className="mt-4">
                <BoldText>To:</BoldText>
                <div className="mt-1">
                  <CustomField
                    type="date"
                    onChange={setYear}
                    field="input"
                    value={year}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      }
      action={() => null}
      close={() => closeModal()}
    />
  );
};

export default memo(ReportAbsence);
