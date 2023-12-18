import { memo } from 'react';
import { Heading1 } from 'components/reusables/ui/heading';
import { BaseText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import { Card } from 'components/reusables/ui/others';

const Hero = () => (
  <Card className="bg-light.purple p-6 ">
    <Heading1>Some Upcoming Events</Heading1>
    <BaseText className="mt-2 text-gray-500 font-light">
      Upload a Prescription and Tell Us what you Need. We do the Rest!
    </BaseText>
    <ActionBtn className="mt-4">Book Now</ActionBtn>
  </Card>
);

export default memo(Hero);
