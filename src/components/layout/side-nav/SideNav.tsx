import { memo } from 'react';
import PrimaryMenu from './primary-menu/PrimaryMenu';
import ProfileMenu from './profile-menu/ProfileMenu';

const SideNav = () => (
  <div
    onClick={(e) => e.stopPropagation()}
    className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white"
  >
    <div className="shrink-0 flex items-center gap-4 _full">
      <i className="fa fa-phone fa-3x" />
      <span className="text-3xl font-bold">Classify</span>
    </div>
    <div className="grow overflow-y-auto pb-8">
      <PrimaryMenu />
      <ProfileMenu />
    </div>
  </div>
);

export default memo(SideNav);
