import { memo } from 'react';
import { Heading1 } from 'components/reusables/ui/heading';
import { BaseText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import { Card } from 'components/reusables/ui/others';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'components/reusables/carousel/Carousel';

const Hero = () => (
  <div className="mt-8">
    <Carousel>
      <>
        <div className="item ">
          <Card className="bg-purple.light p-6 ">
            <Heading1>Announnts</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              Upload a Prescription and Tell Us what you Need. We do the Rest!
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
        <div className="item ">
          <Card className="bg-purple.light p-6 ">
            <Heading1>Announcementdffads</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              Upload a Prescription and Tell Us what you Need. We do the Rest!
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
        <div className="item ">
          <Card className="bg-purple.light p-6 ">
            <Heading1>Auncemedfjnts</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              Upload a Prescription and Tell Us what you Need. We do the Rest!
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
      </>
    </Carousel>
  </div>
);

export default memo(Hero);
