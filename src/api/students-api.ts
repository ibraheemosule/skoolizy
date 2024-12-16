import { AxiosInstance } from 'axios';
import { TStudent, TStudents } from '~shared-ts-types/t-user-data';
import { TListApi } from '~src/shared-ts-types/t-api';

export default (api: AxiosInstance) => ({
  getAllStudents: async (params?: {
    search?: string;
    type?: string;
    page?: number;
  }): Promise<{ data: TListApi<TStudents> }> => {
    const res = await api.get('/students', { params });
    return res.data;
  },

  getStudent: async (tag: string): Promise<{ data: TStudent }> => {
    const res = await api.get(`/students/${tag}`);
    return res.data;
  },
});
