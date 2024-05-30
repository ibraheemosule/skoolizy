import axios, { AxiosInstance } from 'axios';
import externalApi from './externalApi';

type TApi = ReturnType<typeof externalApi>;

class Api {
  private axiosInstance: AxiosInstance = axios.create({});

  api: TApi = { ...externalApi(this.axiosInstance) };
}

export default Api;
