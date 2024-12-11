import { memo } from 'react';
import { BoldText } from '~reusables/ui/Text';
import Modal from '~components/reusables/Modal';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

const FilterAbenceDate = ({ closeModal }: { closeModal: () => void }) => {
  const [year, setYear] = useCustomField('');

  return (
    <Modal
      size="sm"
      title="Select date range"
      content={
        <div className="text-left mb-4">
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
        </div>
      }
      action={() => null}
      close={() => closeModal()}
      actionText="Filter"
    />
  );
};

export default memo(FilterAbenceDate);
