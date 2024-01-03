import { memo } from 'react';
import AsideAdmin from 'components/layout/aside-admin/AsideAdmin';
import { Outlet } from 'react-router-dom';
import ClassroomNav from './classroom-nav/ClassroomNav';

const Classroom = () => (
  <section className="flex _full flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 xl:w-8/12 shrink-0 overflow-auto">
      <ClassroomNav />
      <Outlet />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(Classroom);
