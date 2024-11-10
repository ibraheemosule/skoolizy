import { AxiosInstance } from 'axios';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';

export default (api: AxiosInstance) => ({
  signup: async (
    body: TUserSignupPayload
  ): Promise<{ data: { message: string; tag: string } }> => {
    const res = await api.post('/auth/signup', body);
    return res.data;
  },

  confirmSignup: async (body: {
    email: string;
    otp: string;
  }): Promise<{ data: { access_token: string } }> => {
    const res = await api.patch('/auth/confirm-signup', body);
    return res.data;
  },

  signin: async (body: {
    tag: string;
    password: string;
  }): Promise<{ data: { access_token: string } }> => {
    const res = await api.post('/auth/signin', body);
    return res.data;
  },

  sendOtp: async (body: {
    email: string;
  }): Promise<{ data: { message: string } }> => {
    const res = await api.post('/auth/send-otp', body);
    return res.data;
  },

  sendResetPasswordLink: async (tag: string) => {
    const res = await api.get(`/auth/send-reset-password-link/${tag}`);
    return res.data;
  },

  createNewPassword: async (body: { token: string; new_password: string }) => {
    const res = await api.put('/auth/create-new-password', body);
    return res.data;
  },
});
