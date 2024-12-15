import { AxiosInstance } from 'axios';
import { TGuardian, TGuardians } from '~shared-ts-types/t-user-data';
import { TListApi } from '~src/shared-ts-types/t-api';

export default (api: AxiosInstance) => ({
  getAllGuardians: async (params?: {
    search?: string;
    type?: string;
    page?: number;
  }): Promise<{ data: TListApi<TGuardians> }> => {
    const res = await api.get('/guardians', { params });
    return res.data;
  },

  getGuardian: async (tag: string): Promise<{ data: TGuardian }> => {
    const res = await api.get(`/guardians/${tag}`);
    return res.data;
  },
});
