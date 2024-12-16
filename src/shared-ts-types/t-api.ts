import externalApi from '~src/api/external-api';
import announcementsApi from '~src/api/announcements-api';
import authApi from '~src/api/auth-api';
import accountApi from '~src/api/account-api';
import staffsApi from '~src/api/staffs-api';
import guardiansApi from '~src/api/guardians-api';
import studentsApi from '~src/api/students-api';

type TApi = ReturnType<typeof externalApi> &
  ReturnType<typeof announcementsApi> &
  ReturnType<typeof authApi> &
  ReturnType<typeof accountApi> &
  ReturnType<typeof staffsApi> &
  ReturnType<typeof guardiansApi> &
  ReturnType<typeof studentsApi>;

export type TListApi<T> = {
  list: T[];
  page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
};

export type TApiError = {
  response: { data: { error: string; message: string }; status: number };
};

export default TApi;
