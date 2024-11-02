import axios, { AxiosInstance } from 'axios';
import TApi from '~src/shared-ts-types/t-api';
import announcementsApi from './announcements-api';
import externalApi from './external-api';

const baseURL = String(import.meta.env.VITE_BASE_URL);
class Api {
  private axiosInstance: AxiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });

  api: TApi = {
    ...externalApi(this.axiosInstance),
    ...announcementsApi(this.axiosInstance),
  };
}

export default Api;
