import { memo } from 'react';
import IconCard from '~components/reusables/IconCard';
import { BaseText, BoldText, SmallText } from '~components/reusables/ui/Text';

type TFeedCard = { [key in 'author' | 'date' | 'content']: string } & {
  avi?: string;
};

const FeedCard = ({ author, avi, date, content }: TFeedCard) => (
  <IconCard className="border-b last:border-0 py-6 first:pt-0 border-gray-200">
    <IconCard.Wrapper>
      <IconCard.Icon className="mr-2 self-start bg-gray-200" size="40">
        {avi ?? <i className="fa fa-user" />}
      </IconCard.Icon>
      <IconCard.IconInfo className="grow flex-wrap">
        <div className="flex w-full justify-between">
          <BoldText>{author}</BoldText>
          <div className="ml-auto text-gray-500">
            <SmallText>{date && '02/10/23'}</SmallText>
            <SmallText>{date && '1:00pm'}</SmallText>
          </div>
        </div>
        <BaseText className="text-sm w-full">{content}</BaseText>
      </IconCard.IconInfo>
    </IconCard.Wrapper>
  </IconCard>
);

export default memo(FeedCard);
