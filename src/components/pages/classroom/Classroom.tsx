import { memo } from 'react';
import AsideAdmin from 'components/layout/aside-admin/AsideAdmin';
import Hero from './hero/Hero';
import LiveClasses from './live-classes/LiveClasses';
import ClassroomStats from './classroom-stats/ClassroomStats';

const Classroom = () => (
  <section className="flex _full flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 xl:w-8/12 shrink-0 overflow-auto">
      <Hero />
      <ClassroomStats />
      <LiveClasses />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(Classroom);
