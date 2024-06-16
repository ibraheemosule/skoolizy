import { AxiosInstance } from 'axios';
import { TAnnouncementsData } from '~shared-ts-types/t-announcements-data';

export default (api: AxiosInstance) => ({
  getAllAnnouncements: async (): Promise<{
    data: TAnnouncementsData[];
  }> => {
    const res = await api.get('/announcements');
    return res.data;
  },
});
