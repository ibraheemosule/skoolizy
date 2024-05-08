import { NavLink } from 'react-router-dom';
import PrimaryMenu from './PrimaryMenu';
import ProfileMenu from './ProfileMenu';
import logo from '~assets/images/logo.png';

const SideNav = () => (
  <div
    onClick={(e) => e.stopPropagation()}
    className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white md:bg-transparent"
  >
    <div className="shrink-0 flex pb-2 _full">
      <NavLink to="/">
        <img height={30} width={30} src={logo} alt="logo" />
      </NavLink>
    </div>
    <div className="grow overflow-y-auto pb-8">
      <PrimaryMenu />
      <ProfileMenu />
    </div>
  </div>
);

export default SideNav;
