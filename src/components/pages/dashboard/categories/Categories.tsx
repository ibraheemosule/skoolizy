import { memo } from 'react';
import { BaseText, SmallText } from 'components/reusables/ui/text';
import { Circle, Card } from 'components/reusables/ui/others';

const Categories = () => (
  <div className="mt-6">
    <BaseText>Categories</BaseText>
    <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
      <Card className="p-3 text-white  bg-dark.brown">
        <div className="flex gap-1 justify-between items-center">
          <Circle size="30" className="bg-white shrink-0">
            <i className="fa fa-video-camera text-black" aria-hidden="true" />
          </Circle>
          <div className="flex gap-1 items-center">
            <BaseText>$100</BaseText>
            <SmallText>
              <s>$500</s>
            </SmallText>
          </div>
        </div>
        <BaseText className="mt-4">Video Consultation Chat</BaseText>
      </Card>
    </div>
  </div>
);

export default memo(Categories);
