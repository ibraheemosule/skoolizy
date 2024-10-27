import { AxiosInstance } from 'axios';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';

export default (api: AxiosInstance) => ({
  signup: async (
    body: TUserSignupPayload
  ): Promise<{ data: { message: string } }> => {
    const res = await api.post('/teachers', body);
    return res.data;
  },

  confirmSignup: async (body: {
    email: string;
    otp: string;
  }): Promise<{ data: { access_token: string } }> => {
    const res = await api.post('/teachers/verify', body);
    return res.data;
  },

  sendOtp: async (body: { email: string }) => {
    const res = await api.post('/auth/send-otp', body);
    return res.data;
  },

  sendResetPasswordLink: async (tag: string) => {
    const res = await api.get(`/auth/send-reset-password-link/${tag}`);
    return res.data;
  },

  createNewPassword: async (body: { token: string; new_password: string }) => {
    const res = await api.post('/auth/create-new-password', body);
    return res.data;
  },
});
