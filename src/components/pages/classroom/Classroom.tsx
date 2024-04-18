import { memo } from 'react';
import AsideAdmin from 'components/layout/aside-admin/AsideAdmin';
import { Outlet } from 'react-router-dom';
import ClassroomList from './classroom-list/ClassroomList';

const Classroom = () => (
  <section className="flex  _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full lg:w-3/5 xl:w-8/12 shrink-0">
      <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
        <div className="mx-auto w-full">
          <ClassroomList />
        </div>
        <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
    <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(Classroom);
