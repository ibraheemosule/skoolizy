import { AxiosInstance } from 'axios';
import { TAnnouncementsData } from '~shared-ts-types/t-announcements-data';
import { TListApi } from '~shared-ts-types/t-api';

export default (api: AxiosInstance) => ({
  getAllAnnouncements: async (params: {
    search?: string;
    type?: string;
    page?: number;
  }): Promise<TListApi<TAnnouncementsData>> => {
    const res = await api.get('/announcements', { params });
    return res.data;
  },
});
