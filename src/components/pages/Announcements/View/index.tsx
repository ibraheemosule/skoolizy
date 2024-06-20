import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { memo } from 'react';
import Api from '~api';
import Modal from '~components/reusables/Modal';
import popup from '~utils/popup';

const { api } = new Api();

type TViewAnnouncement = {
  id: number;
  closeModal: () => void;
};

const ViewAnnouncement = ({ id, closeModal }: TViewAnnouncement) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: [`announcements_${id}`],
    queryFn: () => api.getAnnouncement(id),
  });

  const { mutateAsync } = useMutation({
    mutationFn: () => api.deleteAnnouncement(id),
    onSuccess: async () =>
      queryClient.invalidateQueries({
        queryKey: ['announcements'],
      }),
  });

  return (
    <Modal
      size="md"
      isLoading={isLoading}
      title={
        <div className="flex flex-col gap-1 capitalize">
          <h3>{data?.data.title}</h3>
          <span className="text-gray-500 text-sm">By Mr Tosin olawole</span>
        </div>
      }
      content={
        <div data-testid="announcement-modal">
          <p className=" first-letter:uppercase">{data?.data.message}</p>
        </div>
      }
      close={() => closeModal()}
      {...(data?.data.type !== 'memo' && {
        action: async () => {
          const res = (await mutateAsync()) as unknown as { message: string };
          if (res) {
            popup('success', res.message);
            closeModal();
          }
        },
      })}
      fixedActionBtn
      actionText="Delete"
    />
  );
};

export default memo(ViewAnnouncement);
