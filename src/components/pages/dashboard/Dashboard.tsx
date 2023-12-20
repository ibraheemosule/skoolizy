import { memo } from 'react';
import Hero from './hero/Hero';
import Categories from './categories/Categories';
import MyAppointments from './live-classes/LiveClasses';
import Requests from './requests/Requests';
import Highlights from './highlights/Highlights';

const Dashboard = () => (
  <section>
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-full lg:w-3/5 shrink-0">
        <Hero />
        <Categories />
        <MyAppointments />
      </div>
      <div className="w-full lg:w-auto grow">
        <Requests />
        <Highlights />
      </div>
    </div>
  </section>
);

export default memo(Dashboard);
