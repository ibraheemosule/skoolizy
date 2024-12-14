import { AxiosInstance } from 'axios';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';
import { formHeader } from '~utils';

export default (api: AxiosInstance) => ({
  getAccount: async () => {
    const res = await api.get('/account');
    return res.data;
  },

  updateAccount: async (
    body: Partial<TUserSignupPayload>
  ): Promise<{
    message: string;
  }> => {
    const res = await api.post('/account', body, formHeader);
    return res.data;
  },
});
