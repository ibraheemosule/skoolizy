import externalApi from '~src/api/external-api';
import announcementsApi from '~src/api/announcements-api';

type TApi = ReturnType<typeof externalApi> &
  ReturnType<typeof announcementsApi>;

export default TApi;
