import externalApi from '~src/api/external-api';
import announcementsApi from '~src/api/announcements-api';
import authApi from '~src/api/auth-api';

type TApi = ReturnType<typeof externalApi> &
  ReturnType<typeof announcementsApi> &
  ReturnType<typeof authApi>;

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
