import { memo } from 'react';
import AsideAdmin from 'components/layout/aside-admin/AsideAdmin';
import LatestRequests from './lastest-requests/LatestRequests';

const Requests = () => (
  <section className="flex flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 shrink-0 overflow-auto">
      <LatestRequests />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(Requests);
