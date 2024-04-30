import { memo } from 'react';
import { Heading1 } from '~reusables/ui/heading';
import { BaseText } from '~reusables/ui/text';
import { ActionBtn } from '~reusables/ui/buttons';
import { Card } from '~reusables/ui/others';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '~reusables/carousel';

const Hero = () => (
  <div className="mt-8">
    <Carousel>
      <>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1>Examination Information</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              Exam commences on the 31st of June, 2024
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1>Next PTA meeting</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              Our PTA meeting comes up on the 31st of August, 2024. Guardians
              are advised to be present
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1>End of Term</Heading1>
            <BaseText className="mt-2 text-gray-500 font-light">
              The current term ends on the 15th of August, 2024
            </BaseText>
            <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
          </Card>
        </div>
      </>
    </Carousel>
  </div>
);

export default memo(Hero);
