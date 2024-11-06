import axios, { AxiosInstance } from 'axios';
import announcementsApi from './announcements-api';
import TApi from '~shared-ts-types/t-api';
import authStore from '~src/store/auth';
import auth from './auth-api';
import externalApi from './external-api';

const baseURL = String(import.meta.env.VITE_BASE_URL);
class Api {
  private axiosInstance: AxiosInstance = axios.create({
    baseURL,
    responseType: 'json',
  });

  refreshToken = this.axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      const getNewToken =
        error.response?.data?.message === 'Expired token' &&
        authStore.getState().staySignedIn;

      if (!getNewToken) {
        authStore.getState().logout();
        return Promise.reject(error);
      }

      try {
        const data = await this.axiosInstance.get('/auth/refresh-token');
        authStore.getState().login(data.data);
        originalRequest.headers.Authorization = `Bearer ${data.data}`;

        return await this.axiosInstance(originalRequest);
      } catch (e) {
        const err = e as { data: { message: string } };
        if (err?.data?.message === 'Token is missing') {
          authStore.getState().logout();
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
  };
}

export default Api;
