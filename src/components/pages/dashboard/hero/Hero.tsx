import { memo } from 'react';
import { Heading1 } from 'components/reusables/ui/heading';
import { BaseText } from 'components/reusables/ui/text';
import { ActionBtn } from 'components/reusables/ui/buttons';
import { Card } from 'components/reusables/ui/others';

const Hero = () => (
  <Card className="bg-purple.light mt-8 p-6 ">
    <Heading1>Announcements</Heading1>
    <BaseText className="mt-2 text-gray-500 font-light">
      Upload a Prescription and Tell Us what you Need. We do the Rest!
    </BaseText>
    <ActionBtn className="mt-4 px-4 py-2">Read more</ActionBtn>
  </Card>
);

export default memo(Hero);
