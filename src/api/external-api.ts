import { AxiosInstance } from 'axios';
import { TCountry } from '~utils/shared-ts-types/data-types';

const COUNTRY_URL = String(import.meta.env.VITE_COUNTRIES_URL);

export default (api: AxiosInstance) => ({
  getCountryAndState: async (): Promise<{
    data: TCountry[];
  }> => {
    const res = await api.get(COUNTRY_URL);
    return res.data;
  },
});
