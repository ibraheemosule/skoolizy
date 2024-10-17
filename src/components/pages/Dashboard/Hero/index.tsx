import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Heading1 } from '~reusables/ui/Heading';
import { BaseText } from '~reusables/ui/Text';
import { ActionBtn } from '~reusables/ui/Buttons';
import { Card } from '~reusables/ui/Others';
import Carousel from '~reusables/Carousel';
import ViewAnnouncementModal from '~components/pages/Announcements/View';
import SkeletonLoader from '~components/reusables/SkeletonLoader';
import Api from '~api';

const { api } = new Api();

const Hero = () => {
  const [announcement, setAnnouncement] = useState<number | null>(null);
  const { data } = useQuery({
    queryKey: ['announcements'],
    queryFn: () => api.getAllAnnouncements(),
  });

  const renderAnnouncement = (id: number) => setAnnouncement(id);
  return (
    <div className="mt-8">
      {announcement && (
        <ViewAnnouncementModal
          id={announcement}
          closeModal={() => setAnnouncement(null)}
        />
      )}
      <Carousel>
        {data ? (
          data?.data?.map((datum) => (
            <div className="item" key={datum.id}>
              <Card className="bg-purple.light p-6 ">
                <Heading1 className="truncate first-letter:capitalize">
                  {datum.title}
                </Heading1>
                <BaseText className="mt-4 text-gray-500 truncate first-letter:capitalize">
                  {datum.message}
                </BaseText>
                <div className="mt-4 w-32 first-letter:capitalize">
                  <ActionBtn onClick={() => renderAnnouncement(datum.id)}>
                    Read more
                  </ActionBtn>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <div className="h-48">
            <SkeletonLoader type="section" />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
