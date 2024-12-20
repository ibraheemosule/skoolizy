import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Api from '~api';
import ViewAnnouncementModal from '~components/pages/Announcements/widgets-announcements/ViewAnnouncement';
import EmptyView from '~components/reusables/empty-view';
import SkeletonLoader from '~components/reusables/SkeletonLoader';
import Carousel from '~reusables/Carousel';
import { ActionBtn } from '~reusables/ui/Buttons';
import { Heading1 } from '~reusables/ui/Heading';
import { Card } from '~reusables/ui/Others';
import { BaseText } from '~reusables/ui/Text';

const { api } = new Api();

const Hero = () => {
  const [announcement, setAnnouncement] = useState<number | null>(null);
  const { data, refetch, isError, isFetching } = useQuery({
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
        {data?.data?.list.length ? (
          data.data.list.map((datum) => (
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
        ) : isFetching ? (
          <div className="h-48">
            <SkeletonLoader type="section" />
          </div>
        ) : (
          <EmptyView
            error={isError}
            height="25vh"
            message={
              isError ? 'Could not Fetch Announcements' : 'No Announcements yet'
            }
            {...(isError ? { action: refetch } : {})}
          />
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
