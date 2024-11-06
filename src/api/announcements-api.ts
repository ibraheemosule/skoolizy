import { AxiosInstance } from 'axios';
import { TAnnouncementsData } from '~src/shared-ts-types/t-announcements-data';
import { TListApi } from '~src/shared-ts-types/t-api';

export default (api: AxiosInstance) => ({
  getAllAnnouncements: async (params?: {
    search?: string;
    type?: string;
    page?: number;
  }): Promise<TListApi<TAnnouncementsData>> => {
    const res = await api.get('/announcements', { params });
    return res.data;
  },

  getAnnouncement: async (
    id: number
  ): Promise<{ data: TAnnouncementsData }> => {
    const res = await api.get(`/announcements/${id}`);
    return res.data;
  },

  postAnnouncement: async (body: {
    title: string;
    type: 'single_event' | 'multi_event' | 'memo';
    message: string;
    recipient?: 'all' | 'parents' | 'staffs' | 'students';
    event_start_date?: string;
    event_end_date?: string;
    event_time?: string;
    reminder?: number | null;
  }): Promise<TListApi<TAnnouncementsData>> => {
    const res = await api.post('/announcements', body);
    return res.data;
  },

  updateAnnouncement: async (
    id: number,
    body: {
      title?: string;
      message?: string;
      recipient?: 'all' | 'parents' | 'staffs' | 'students';
      event_start_date?: string;
      event_end_date?: string;
      event_time?: string;
    }
  ): Promise<TListApi<TAnnouncementsData>> => {
    const res = await api.put(`/announcements/${id}`, body);
    return res.data;
  },

  deleteAnnouncement: async (
    id: number
  ): Promise<{ data: TAnnouncementsData }> => {
    const res = await api.delete(`/announcements/${id}`);
    return res.data;
  },
});
