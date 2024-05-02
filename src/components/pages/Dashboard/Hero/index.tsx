import { Heading1 } from '~reusables/ui/Heading';
import { BaseText } from '~reusables/ui/Text';
import { ActionBtn } from '~reusables/ui/Buttons';
import { Card } from '~reusables/ui/Others';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '~reusables/Carousel';

const Hero = () => (
  <div className="mt-8">
    <Carousel>
      <div className="item">
        <Card className="bg-purple.light p-6 ">
          <Heading1 className="truncate">Examination Information</Heading1>
          <BaseText className="mt-4 mb-2 text-gray-500  truncate">
            Exam commences on the 31st of June, 2024
          </BaseText>
          <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
        </Card>
      </div>
      <div className="item">
        <Card className="bg-purple.light p-6 ">
          <Heading1 className="truncate">Next PTA meeting</Heading1>
          <BaseText className="mt-4 mb-2 text-gray-500  truncate">
            Our PTA meeting comes up on the 31st of August, 2024. Guardians are
            advised to be present
          </BaseText>
          <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
        </Card>
      </div>
      <div className="item">
        <Card className="bg-purple.light p-6 ">
          <Heading1 className="truncate">End of Term</Heading1>
          <BaseText className="mt-4 mb-2 text-gray-500  truncate">
            The current term ends on the 15th of August, 2024
          </BaseText>
          <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
        </Card>
      </div>
    </Carousel>
  </div>
);

export default Hero;
