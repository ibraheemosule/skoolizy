import { memo } from 'react';
import { BaseText, BoldText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import Rate from '../rate/Rate';

const Highlights = () => (
  <div className="mt-8 md:mt-6">
    <Rate />
    <div className="flex justify-between gap-6 mb-2 mt-8 md:mt-6">
      <BoldText>Highlights</BoldText>
      <BaseText>View All Highlights</BaseText>
    </div>
    <div className="max-h-[300px] overflow-auto ">
      <div className="flex gap-2 items-end">
        <textarea
          className="grow resize-none max-h-52 bg-gray-100 p-2 rounded-lg"
          maxLength={200}
        />
        <ActionBtn className="shrink-0">Submit</ActionBtn>
      </div>
    </div>
  </div>
);

export default memo(Highlights);
