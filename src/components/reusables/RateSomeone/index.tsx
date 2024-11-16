import { useEffect, useState } from 'react';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';
import StarRatings from '~reusables/StarRating';
import { BoldText } from '~reusables/ui/Text';
import useGetCountriesAndState from '../hooks/useGetCountriesAndState';
import ConfirmRatingModal from './ConfirmRatingModal';

const RateSomeone = () => {
  const { countries, isLoading: fetchingCountry } = useGetCountriesAndState();

  const [user, setUser, list, filterFn] = useCustomField([], []);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!user.length) setRating(0);
  }, [user.length]);

  useEffect(() => filterFn(countries), [countries.length]);

  const starClicked = (i: number) => {
    if (!user.length) return;
    setRating(i);
  };

  const closeModal = () => {
    setRating(0);
  };

  return (
    <>
      {!!rating && (
        <ConfirmRatingModal rating={rating} closeModal={closeModal} />
      )}
      <BoldText>Rate Someone</BoldText>
      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-3 mt-3">
        <div className="grow xs-grow-0 w-[180px]">
          <CustomField
            field="select"
            filterFn={filterFn}
            onSelect={setUser}
            value={user}
          >
            <CustomField.DropdownWrapper loading={fetchingCountry} width={100}>
              {list.map((v) => (
                <CustomField.Dropdown key={Math.random()} value={v}>
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

export default RateSomeone;
