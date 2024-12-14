import { AxiosInstance } from 'axios';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';
import { formHeader } from '~utils';

export default (api: AxiosInstance) => ({
  signup: async (
    body: TUserSignupPayload
  ): Promise<{
    data: {
      access_token: string;
      verified: boolean;
      tag: string;
      email: string;
    };
  }> => {
    const res = await api.post('/auth/signup', body, formHeader);
    return res.data;
  },

  verifyAccount: async (body: {
    code: string;
  }): Promise<{ data: { message: string } }> => {
    const res = await api.patch('/auth/verify-account', body);
    return res.data;
  },

  signin: async (
    body:
      | {
          tag: string;
          password: string;
        }
      | {
          phone_number: string;
          password: string;
        }
  ): Promise<{
    data: {
      access_token: string;
      verified: boolean;
      tag: string;
      email: string;
    };
  }> => {
    const res = await api.post('/auth/signin', body);
    return res.data;
  },

  sendCode: async (body: { email: string }): Promise<{ message: string }> => {
    const res = await api.post('/auth/send-code', body);
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
