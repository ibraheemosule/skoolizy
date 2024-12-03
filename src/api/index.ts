import axios, { AxiosInstance } from 'axios';
import announcementsApi from './announcements-api';
import TApi from '~shared-ts-types/t-api';
import authStore from '~src/store/auth';
import auth from './auth-api';
import externalApi from './external-api';
import accountApi from '~src/api/account-api';

const baseURL = String(import.meta.env.VITE_BASE_URL);
class Api {
  private axiosInstance: AxiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });

  private refetchToken = false;

  refreshToken = this.axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      const getNewToken = error.response?.data?.message === 'Expired token';

      if (getNewToken && !this.refetchToken) {
        this.refetchToken = true;

        try {
          const data = await this.axiosInstance.get('/auth/refresh-token');
          authStore.getState().login(data.data);
          originalRequest.headers.Authorization = `Bearer ${data.data}`;

          return await this.axiosInstance(originalRequest);
        } catch {
          authStore.getState().logout();
          authStore.getState().update({ sessionEnd: true });
        }
      }

      return Promise.reject(error);
    }
  );

  auth = this.axiosInstance.interceptors.request.use((config) => {
    const { token } = authStore.getState();
    const cloneConfig = { ...config };
    if (token) {
      cloneConfig.headers.Authorization = `Bearer ${token}`;
    }
    return cloneConfig;
  });

  api: TApi = {
    ...externalApi(this.axiosInstance),
    ...announcementsApi(this.axiosInstance),
    ...auth(this.axiosInstance),
    ...accountApi(this.axiosInstance),
  };
}

export default Api;
