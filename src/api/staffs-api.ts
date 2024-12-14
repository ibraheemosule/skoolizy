import { AxiosInstance } from 'axios';
import { TStaff, TStaffs } from '~shared-ts-types/t-user-data';
import { TListApi } from '~src/shared-ts-types/t-api';

export default (api: AxiosInstance) => ({
  getAllStaffs: async (params?: {
    search?: string;
    type?: string;
    page?: number;
  }): Promise<{ data: TListApi<TStaffs> }> => {
    const res = await api.get('/staffs', { params });
    return res.data;
  },

  getStaff: async (tag: string): Promise<{ data: TStaff }> => {
    const res = await api.get(`/staffs/${tag}`);
    return res.data;
  },
});
