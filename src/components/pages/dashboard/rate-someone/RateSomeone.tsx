import { memo, useState } from 'react';
import { BoldText } from 'components/reusables/ui/text';
import CustomField from 'components/reusables/custom-field/CustomField';
import StarRatings from 'components/reusables/star-ratings/StarRatings';

const Rate = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  function updateName(value: string) {
    setName(value);
    setRating(0);
  }

  const starClicked = (i: number) => {
    if (!name) return;
    setRating(i);
  };

  return (
    <div className="mt-8">
      <BoldText>Rate Someone</BoldText>
      <div className="flex flex-wrap gap-8 gap-y-3 mt-3">
        <div className="grow max-w-[250px]">
          <CustomField>
            <>
              <CustomField.Editable
                search
                onChange={(e) => updateName(e.target.value)}
                value={name}
                icon
                id="here"
              />
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown onClick={() => updateName('john')}>
                  john
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => updateName('bob')}>
                  bob
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => updateName('joshua')}>
                  joshua
                </CustomField.Dropdown>
                <CustomField.Dropdown onClick={() => updateName('Zarah')}>
                  Zarah
                </CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
        <StarRatings rating={rating} onClick={starClicked} />
      </div>
    </div>
  );
};

export default memo(Rate);
