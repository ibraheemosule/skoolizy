import { AxiosInstance } from 'axios';

export default (api: AxiosInstance) => ({
  getAccount: async () => {
    const res = await api.get('/account');
    return res.data;
  },
});
