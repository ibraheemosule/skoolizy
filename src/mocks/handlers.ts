import mockAccountApi from '~src/mocks/requests/mockAccountApi';
import mockAnnouncements from './requests/mockAnnouncementsApi';
import mockExternalApis from './requests/mockExternalApi';

export default [...mockExternalApis, ...mockAnnouncements, ...mockAccountApi];
