import { memo, useState, FC } from 'react';
import SideNav from 'components/layout/side-nav/SideNav';
import Dashboard from 'components/pages/dashboard/Dashboard';
import BgImage from './bg-image/BgImage';
import TopHeader from './top-header/TopHeader';

const Layout: FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const animate = toggleNav ? 'animate-in' : 'animate-out';

  return (
    <main className="relative flex overflow-hidden">
      <BgImage />
      <section
        data-testid="nav-wrapper"
        onClick={() => setToggleNav(false)}
        className={`${animate} modal md:relative md:w-1/3  xlg:w-1/4 xl:w-1/6 shrink-0`}
      >
        <SideNav />
      </section>
      <section className="h-screen flex flex-col overflow-y-auto grow pt-6">
        <header className="_full shrink-0 flex">
          <TopHeader setToggleNav={setToggleNav} />
        </header>
        <div className="page _full overflow-hidden grow my-6 px-6">
          <Dashboard />
        </div>
      </section>
    </main>
  );
};

export default memo(Layout);
