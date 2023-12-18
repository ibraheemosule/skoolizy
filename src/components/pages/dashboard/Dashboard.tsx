import { memo } from 'react';
import Hero from './hero/Hero';
import Categories from './categories/Categories';
import MyAppointments from './my-appointements/MyAppointments';

const Dashboard = () => (
  <section>
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-full lg:w-8/12 shrink-0">
        <Hero />
        <Categories />
        <MyAppointments />
      </div>
      <div className="w-full md:w-auto grow">this</div>
    </div>
  </section>
);

export default memo(Dashboard);
