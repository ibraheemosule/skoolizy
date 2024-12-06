import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SideNav from '~components/Layout/SideNav';
import BgImage from './BgImage';
import TopHeader from './TopHeader';

import Api from '~api';
import useBanner from '~components/reusables/hooks/useBanner';
import userStore from '~src/store/user';
import { BANNER_DEFAULT_TIMEOUT } from '~utils/constants';
import { getPrevRoute } from '~utils/query';

const { api } = new Api();
const Layout: FC = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { banner } = useBanner();
  const animate = toggleNav ? 'animate-in' : 'animate-out';
  const { data } = useQuery({
    queryKey: ['account'],
    queryFn: () => api.getAccount(),
  });

  useEffect(() => {
    if (data) {
      userStore.getState().update({
        email: data?.data.email,
        nationality: data?.data.country,
        firstName: data?.data.first_name,
        lastName: data?.data.last_name,
        middleName: data?.data.middle_name,
        gender: data?.data.gender,
        homeAddress: data?.data.home_address,
        phoneNumber: data?.data.phone_number,
        state: data?.data.state_of_origin,
        dateOfBirth: data?.data.date_of_birth,
      });
    }
  }, [data]);

  useEffect(() => {
    if (['/auth/login'].includes(String(getPrevRoute()))) {
      banner({
        text: 'Login Successful!',
        type: 'success',
        timeout: BANNER_DEFAULT_TIMEOUT,
      });
    }
  }, []);

  return (
    <main className="absolute inset-0 flex overflow-hidden">
      <BgImage />
      <section
        data-testid="nav-wrapper"
        onClick={() => setToggleNav(false)}
        className={`${animate} h-full modal md:relative md:w-1/3  xlg:w-1/4 lg:w-1/5 xl:w-1/6 shrink-0`}
      >
        <SideNav />
      </section>
      <section
        id="layout"
        className="h-full flex flex-col overflow-y-auto grow pt-6"
      >
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
