import { memo } from 'react';
import { BaseText, BoldText, SmallText } from '~reusables/ui/Text';
import IconCard from '~reusables/IconCard';
import { Tag } from '~reusables/ui/Others';
import { Check, CancelBtn } from '~reusables/ui/Buttons';

const RequestCard = () => (
  <IconCard className="text-black ">
    <IconCard.Wrapper>
      <IconCard.Icon size="50">
        <i className="fa fa-user" />
      </IconCard.Icon>
      <IconCard.IconInfo className="grow ml-2 flex gap-2">
        <div>
          <BoldText className="text-gray-500">Mr John Doe</BoldText>
          <SmallText>Teacher</SmallText>
        </div>
        <div className="ml-auto text-gray-500">
          <SmallText>02/10/23</SmallText>
          <SmallText>1:00pm</SmallText>
        </div>
      </IconCard.IconInfo>
    </IconCard.Wrapper>
    <IconCard.Content className=" mt-4">
      <div className="border-t border-white pt-3">
        <BaseText>A New board and chalk</BaseText>

        <div className="flex flex-wrap gap-2 mt-4 items-start">
          <Tag>JSS-3</Tag>
          <Tag>Equipment</Tag>
          <div className="ml-auto flex flex-wrap gap-8 -mt-1">
            <Check />
            <CancelBtn />
          </div>
        </div>
      </div>
    </IconCard.Content>
  </IconCard>
);

export default memo(RequestCard);
