import AsideAdmin from '~components/Layout/AsideAdmin';
import Hero from './Hero';
import LiveClasses from './LiveClasses';
import TopStats from './TopStats';

const Dashboard = () => (
  <section className="flex _full flex-wrap max-h-full overflow-auto lg:flex-nowrap gap-6">
    <div className="w-full lg:w-3/5 xl:w-8/12 shrink-0 overflow-auto">
      <Hero />
      <TopStats />
      <LiveClasses />
    </div>
    <div className="w-full lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default Dashboard;
