import externalApi from '~src/api/external-api';
import announcementsApi from '~src/api/announcements-api';

type TApi = ReturnType<typeof externalApi> &
  ReturnType<typeof announcementsApi>;

export type TListApi<T> = {
  data: T[];
  page: 1;
  per_page: 10;
  total_items: 14;
  total_pages: 2;
};

export default TApi;
