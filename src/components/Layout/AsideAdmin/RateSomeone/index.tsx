import { useState } from 'react';
import { BoldText } from '~reusables/ui/Text';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import StarRatings from '~reusables/StarRating';

const Rate = () => {
  const [user, setUser, list, filterFn] = useCustomField(
    [],
    ['Joshua', 'John', 'Maryam']
  );
  const [rating, setRating] = useState(0);

  const starClicked = (i: number) => {
    if (!user.length) return;
    setRating(i);
  };

  return (
    <>
      <BoldText>Rate Someone</BoldText>
      <div className="flex justify-between flex-wrap gap-4 gap-y-3 mt-3">
        <div className="grow max-w-[180px]">
          <CustomField
            field="select"
            filterFn={filterFn}
            onSelect={setUser}
            value={user}
          >
            <CustomField.DropdownWrapper>
              {list.map((v) => (
                <CustomField.Dropdown key={v} value={v}>
                  {v}
                </CustomField.Dropdown>
              ))}
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
        <StarRatings rating={rating} onClick={starClicked} />
      </div>
    </>
  );
};

export default Rate;
