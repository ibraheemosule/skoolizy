import { memo } from 'react';
import { BaseText, SmallText } from '~reusables/ui/text';
import IconCard from '~reusables/icon-card';

const Categories = () => (
  <div className="mt-6">
    <BaseText>Categories</BaseText>
    <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap xlg:justify-between">
      <IconCard className="bg-brown.dark text-white">
        <IconCard.Wrapper>
          <IconCard.Icon size="30">
            <i className="fa fa-video-camera text-black" aria-hidden="true" />
          </IconCard.Icon>
          <IconCard.IconInfo>
            <BaseText>$100</BaseText>
            <SmallText>
              <s>$500</s>
            </SmallText>
          </IconCard.IconInfo>
        </IconCard.Wrapper>
        <IconCard.Content>
          <BaseText className="mt-4">Video Consultation Chat</BaseText>
        </IconCard.Content>
      </IconCard>
      <IconCard className="bg-orange text-white">
        <IconCard.Wrapper>
          <IconCard.Icon size="30">
            <i className="fa fa-video-camera text-black" aria-hidden="true" />
          </IconCard.Icon>
          <IconCard.IconInfo>
            <BaseText>$100</BaseText>
            <SmallText>
              <s>$500</s>
            </SmallText>
          </IconCard.IconInfo>
        </IconCard.Wrapper>
        <IconCard.Content>
          <BaseText className="mt-4">Clinic visit appointment</BaseText>
        </IconCard.Content>
      </IconCard>
      <IconCard className=" bg-yellow.dark text-white">
        <IconCard.Wrapper>
          <IconCard.Icon size="30">
            <i className="fa fa-video-camera text-black" aria-hidden="true" />
          </IconCard.Icon>
          <IconCard.IconInfo>
            <BaseText>$100</BaseText>
            <SmallText>
              <s>$500</s>
            </SmallText>
          </IconCard.IconInfo>
        </IconCard.Wrapper>
        <IconCard.Content>
          <BaseText className="mt-4">Magnetic resonance imaging</BaseText>
        </IconCard.Content>
      </IconCard>
    </div>
  </div>
);

export default memo(Categories);
