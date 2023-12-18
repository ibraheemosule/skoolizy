import { memo } from 'react';
import { Heading1 } from 'components/reusables/ui/heading';
import { BaseText, SmallText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import { Circle, Card } from 'components/reusables/ui/others';

const Dashboard = () => (
  <section>
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-full lg:w-8/12 shrink-0">
        <Card className="bg-light.purple p-6 ">
          <Heading1>Looking for a specialist doctor?</Heading1>
          <BaseText className="mt-2 text-gray-500 font-light">
            Upload a Prescription and Tell Us what you Need. We do the Rest!
          </BaseText>
          <ActionBtn className="mt-4">Book Now</ActionBtn>
        </Card>
        <div className="mt-6">
          <BaseText>Categories</BaseText>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <Card className="p-3 text-white  bg-dark.brown">
              <div className="flex gap-1 justify-between items-center">
                <Circle size="30" className="bg-white shrink-0">
                  <i
                    className="fa fa-video-camera text-black"
                    aria-hidden="true"
                  />
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
      </div>
      <div className="w-full md:w-auto grow">this</div>
    </div>
  </section>
);

export default memo(Dashboard);
