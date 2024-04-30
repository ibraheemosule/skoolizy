import { memo, useState, FC } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '~components/Layout/SideNav';
import BgImage from './BgImage';
import TopHeader from './TopHeader';

const Layout: FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const animate = toggleNav ? 'animate-in' : 'animate-out';

  return (
    <main className="relative flex overflow-hidden">
      <BgImage />
      <section
        data-testid="nav-wrapper"
        onClick={() => setToggleNav(false)}
        className={`${animate} modal md:relative md:w-1/3  xlg:w-1/4 lg:w-1/5 xl:w-1/6 shrink-0`}
      >
        <SideNav />
      </section>
      <section className="h-screen flex flex-col overflow-y-auto grow pt-6">
        <header className="_full shrink-0 flex">
          <TopHeader setToggleNav={setToggleNav} />
        </header>
        <div className="page w-full overflow-hidden grow max-w-[86rem] mx-auto my-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default memo(Layout);
