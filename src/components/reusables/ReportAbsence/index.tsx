import { memo, useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const ReportAbsence = ({ closeModal }: { closeModal: () => void }) => {
  const [classs, setClasss] = useState('one day');
  const [year, setYear] = useCustomField('');

  return (
    <Modal
      size="sm"
      title="Choose day(s) of absence"
      content={
        <div className="text-left mb-4">
          <div className="mt-4">
            <BoldText>Reason (optional):</BoldText>
            <div className="mt-1">
              <textarea
                placeholder="Tell us why..."
                className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
                maxLength={200}
              />
            </div>
          </div>
          <div className="mt-4">
            <BoldText>Duration:</BoldText>
            <div className="mt-1">
              <CustomField
                onSelect={(v) => setClasss(v)}
                field="select"
                value={classs}
              >
                <CustomField.DropdownWrapper>
                  {['one day', 'more days'].map((opt) => (
                    <CustomField.Dropdown key={opt} value={opt}>
                      <span className="capitalize block py-2">{opt}</span>
                    </CustomField.Dropdown>
                  ))}
                </CustomField.DropdownWrapper>
              </CustomField>
            </div>
          </div>

          <div className="mt-4">
            <BoldText>{classs === 'more days' && 'From '}Date:</BoldText>
            <div className="mt-1">
              <CustomField
                type="date"
                onChange={setYear}
                field="input"
                value={year}
              />
            </div>
          </div>
          {classs !== 'one day' && (
            <div className="mt-4">
              <BoldText>To Date:</BoldText>
              <div className="mt-1">
                <CustomField
                  type="date"
                  onChange={setYear}
                  field="input"
                  value={year}
                />
              </div>
            </div>
          )}
        </div>
      }
      action={() => null}
      close={() => closeModal()}
    />
  );
};

export default memo(ReportAbsence);
