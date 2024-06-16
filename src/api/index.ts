import axios, { AxiosInstance } from 'axios';
import externalApi from './external-api';
import announcementsApi from './announcements-api';
import TApi from '~shared-ts-types/t-api';

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
