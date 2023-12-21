import { memo } from 'react';
import { BaseText, BoldText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import Send from 'src/assets/icons/Send';

const Highlights = () => (
  <div className="mt-8 md:mt-6">
    <div className="flex justify-between gap-6">
      <BoldText>Highlights</BoldText>
      <BaseText>View All Highlights</BaseText>
    </div>
    <div className="max-h-[300px] overflow-auto mt-2">
      <div className="flex gap-4 items-end">
        <textarea
          className="grow w-full md:w-auto outline-none resize-none max-h-52 bg-gray-100 p-2 rounded-lg"
          maxLength={200}
        />
        <ActionBtn className="shrink-0 px-0 py-0 bg-transparent text-purple.dark">
          <Send color="#432c81" />
        </ActionBtn>
      </div>
    </div>
  </div>
);

export default memo(Highlights);
