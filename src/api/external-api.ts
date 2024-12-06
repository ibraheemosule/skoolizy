import { AxiosInstance } from 'axios';
import { TCountry } from '~src/shared-ts-types/data-types';
import { env } from '~utils';

const COUNTRY_URL = String(env.VITE_COUNTRIES_URL);

export default (api: AxiosInstance) => ({
  getCountryAndState: async (): Promise<{
    data: TCountry[];
  }> => {
    const res = await api.get(COUNTRY_URL);
    return res.data;
  },
});
