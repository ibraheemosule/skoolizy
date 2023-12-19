import { memo } from 'react';
import { BaseText, BoldText, SmallText } from 'components/reusables/ui/text';
import IconCard from 'components/reusables/icon-card/IconCard';
import { Tag } from 'components/reusables/ui/others';
import { Check, Cancel } from 'components/reusables/ui/buttons';

const RequestCard = () => (
  <IconCard className="text-black ">
    <IconCard.Wrapper>
      <IconCard.Icon size="50">
        <i className="fa fa-user" />
      </IconCard.Icon>
      <IconCard.IconInfo className="grow ml-2">
        <div>
          <BoldText className="text-gray-500 w-full">Mr John Doe</BoldText>
          <SmallText>Teacher</SmallText>
        </div>
      </IconCard.IconInfo>
    </IconCard.Wrapper>
    <IconCard.Content className=" mt-4 px-4">
      <div className="border-t border-white pt-3">
        <BaseText>A New board and chalk</BaseText>

        <div className="flex flex-wrap gap-2 mt-4 items-start">
          <Tag>JSS-3</Tag>
          <Tag>Equipment</Tag>
          <div className="ml-auto flex flex-wrap gap-8 -mt-1">
            <Check />
            <Cancel />
          </div>
        </div>
      </div>
    </IconCard.Content>
  </IconCard>
);

export default memo(RequestCard);
