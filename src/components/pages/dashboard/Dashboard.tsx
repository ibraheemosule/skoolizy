import { memo } from 'react';
import Hero from './hero/Hero';
import Categories from './categories/Categories';
import MyAppointments from './live-classes/LiveClasses';
import LatestRequests from './lastest-requests/LatestRequests';
import Highlights from './highlights/Highlights';
import RateSomeone from './rate-someone/RateSomeone';

const Dashboard = () => (
  <section>
    <div className="flex flex-wrap lg:flex-nowrap gap-6">
      <div className="w-full lg:w-3/5 shrink-0">
        <Hero />
        <Categories />
        <MyAppointments />
      </div>
      <div className="w-full lg:w-auto grow">
        <LatestRequests />
        <RateSomeone />
        <Highlights />
      </div>
    </div>
  </section>
);

export default memo(Dashboard);
