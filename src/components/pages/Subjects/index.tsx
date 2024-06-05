import { Outlet } from 'react-router-dom';
import AsideAdmin from '~components/Layout/AsideAdmin';

const Subjects = () => (
  <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
      <Outlet />
    </div>
    <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default Subjects;
