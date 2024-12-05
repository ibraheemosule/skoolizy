import axios, { AxiosInstance } from 'axios';
import announcementsApi from './announcements-api';
import TApi from '~shared-ts-types/t-api';
import authStore from '~src/store/authStore';
import auth from './auth-api';
import externalApi from './external-api';
import { logout } from '~utils';

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
      const errMessage = error.response?.data?.message;
      const customError = { ...error };

      const getNewToken = errMessage === 'Expired token';

      if (getNewToken && !this.refetchToken) {
        this.refetchToken = true;

        try {
          const data = await this.axiosInstance.get('/auth/refresh-token');
          authStore.getState().login(data.data);
          originalRequest.headers.Authorization = `Bearer ${data.data}`;

          return await this.axiosInstance(originalRequest);
        } catch {
          customError.response.data.message =
            'Current Session has expired, Please sign in again';
          logout({ sessionLogout: true });
        }
      }

      if (errMessage === 'Invalid token') {
        customError.response.data.message =
          'Unknown session, Please sign in again';
        logout({ sessionLogout: true });
      }

      return Promise.reject(customError);
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
