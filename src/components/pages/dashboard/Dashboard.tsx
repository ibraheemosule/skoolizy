import { memo } from 'react';
import Hero from './hero/Hero';
import LiveClasses from './live-classes/LiveClasses';
import LatestRequests from './lastest-requests/LatestRequests';
import Highlights from './highlights/Highlights';
import RateSomeone from './rate-someone/RateSomeone';
import TopStats from './top-stats/TopStats';

const Dashboard = () => (
  <section className="flex flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 shrink-0 overflow-auto">
      <Hero />
      <TopStats />
      <LiveClasses />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <LatestRequests />
      <RateSomeone />
      <Highlights />
    </div>
  </section>
);

export default memo(Dashboard);
