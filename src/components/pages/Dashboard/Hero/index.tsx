import { useState } from 'react';
import { Heading1 } from '~reusables/ui/Heading';
import { BaseText } from '~reusables/ui/Text';
import { ActionBtn } from '~reusables/ui/Buttons';
import { Card } from '~reusables/ui/Others';
import Carousel from '~reusables/Carousel';
import ViewAnnouncementModal from '~components/pages/Announcements/View';

const Hero = () => {
  const [announcement, setAnnouncement] = useState('');

  const renderAnnouncement = () => setAnnouncement('new announcement');
  return (
    <div className="mt-8">
      {announcement && (
        <ViewAnnouncementModal
          view={announcement}
          closeModal={() => setAnnouncement('')}
        />
      )}
      <Carousel>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1 className="truncate">Examination Information</Heading1>
            <BaseText className="mt-4 mb-2imp text-gray-500 truncate">
              Exam commences on the 31st of June, 2024
            </BaseText>
            <div className="mt-4 w-32">
              <ActionBtn onClick={renderAnnouncement}>Read more</ActionBtn>
            </div>
          </Card>
        </div>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1 className="truncate">Next PTA meeting</Heading1>
            <BaseText className="mt-4 mb-2imp text-gray-500 truncate">
              Our PTA meeting comes up on the 31st of August, 2024. Guardians
              are advised to be present
            </BaseText>
            <div className="mt-4 w-32">
              <ActionBtn onClick={renderAnnouncement}>Read more</ActionBtn>
            </div>
          </Card>
        </div>
        <div className="item">
          <Card className="bg-purple.light p-6 ">
            <Heading1 className="truncate">End of Term</Heading1>
            <BaseText className="mt-4 mb-2imp text-gray-500 truncate">
              The current term ends on the 15th of August, 2024
            </BaseText>
            <div className="mt-4 w-32">
              <ActionBtn onClick={renderAnnouncement}>Read more</ActionBtn>
            </div>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
