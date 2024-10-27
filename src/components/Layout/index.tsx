import { useState, FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SideNav from '~components/Layout/SideNav';
import BgImage from './BgImage';
import TopHeader from './TopHeader';
import authStore from '~src/store/auth';

const Layout: FC = () => {
  const navigate = useNavigate();

  const [toggleNav, setToggleNav] = useState(false);
  const animate = toggleNav ? 'animate-in' : 'animate-out';

  useEffect(() => {
    if (!authStore.getState().token) {
      navigate('/auth/login');
    }
  }, []);

  return (
    <main className="absolute inset-0 flex overflow-hidden">
      <Toaster />
      <BgImage />
      <section
        data-testid="nav-wrapper"
        onClick={() => setToggleNav(false)}
        className={`${animate} h-full modal md:relative md:w-1/3  xlg:w-1/4 lg:w-1/5 xl:w-1/6 shrink-0`}
      >
        <SideNav />
      </section>
      <section className="h-full flex flex-col overflow-y-auto grow pt-6">
        <header className="_full shrink-0 flex">
          <TopHeader setToggleNav={setToggleNav} />
        </header>
        <div className="_full overflow-hidden grow max-w-[96rem] mx-auto mb-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
