import { memo } from 'react';
import Icon from '~assets/icons';
import PrimaryMenu from './primary-menu';
import ProfileMenu from './profile-menu';

const SideNav = () => (
  <div
    onClick={(e) => e.stopPropagation()}
    className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white md:bg-transparent"
  >
    <div className="shrink-0 flex pb-2 _full">
      <Icon name="logo" height={50} width={50} />
    </div>
    <div className="grow overflow-y-auto pb-8">
      <PrimaryMenu />
      <ProfileMenu />
    </div>
  </div>
);

export default memo(SideNav);
