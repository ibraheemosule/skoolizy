import AsideAdmin from '~components/Layout/AsideAdmin';
import LatestRequests from './LatestRequests';

const Requests = () => (
  <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
      <LatestRequests />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default Requests;
