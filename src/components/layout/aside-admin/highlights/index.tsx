import { memo } from 'react';
import { BaseText, BoldText, SmallText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import Send from 'src/assets/icons/SendIcon';
import IconCard from 'components/reusables/icon-card';

const Highlights = () => (
  <>
    <div className="flex justify-between">
      <BoldText>Latest Highlights</BoldText>
      <BaseText className=" text-purple.dark">View All</BaseText>
    </div>

    <div className="max-h-[300px] overflow-auto mt-4">
      <div className="flex items-end gap-3">
        <textarea
          placeholder="Share what's happening with others"
          className="grow w-full md:w-auto outline-none resize-none max-h-52 bg-gray-100 p-2 rounded-lg"
          maxLength={200}
        />
        <ActionBtn className="shrink-0 bg-transparent text-purple.dark hover:opacity-50">
          <Send color="#432c81" />
        </ActionBtn>
      </div>
    </div>

    <div className="max-h-[300px] mt-8 overflow-y-auto">
      {Array(10)
        .fill('')
        .map(() => (
          <IconCard
            key={Math.random()}
            className="border-b last:border-0 border-gray-200"
          >
            <IconCard.Wrapper>
              <IconCard.Icon className="mr-2 self-start bg-gray-200" size="40">
                <i className="fa fa-user" />
              </IconCard.Icon>
              <IconCard.IconInfo className="grow flex-wrap">
                <div className="flex w-full justify-between">
                  <BoldText>Mr John Doe</BoldText>
                  <div className="ml-auto text-gray-500">
                    <SmallText>02/10/23</SmallText>
                    <SmallText>1:00pm</SmallText>
                  </div>
                </div>
                <BaseText className="text-sm w-full">
                  Explicabo nihil laborum. Saepe facilis consequuntur in eaque.
                  Consequatur perspiciatis quam. Sed est illo quia
                </BaseText>
              </IconCard.IconInfo>
            </IconCard.Wrapper>
          </IconCard>
        ))}
    </div>
  </>
);

export default memo(Highlights);
