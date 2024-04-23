import { memo } from 'react';
import { Heading1 } from 'components/reusables/ui/heading';
import PrimaryMenu from './primary-menu';
import ProfileMenu from './profile-menu';

const SideNav = () => (
  <div
    onClick={(e) => e.stopPropagation()}
    className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white md:bg-transparent"
  >
    <div className="shrink-0 flex items-center gap-4 _full">
      <i className="fa fa-phone fa-3x" />
      <Heading1>Skoolizy</Heading1>
    </div>
    <div className="grow overflow-y-auto pb-8">
      <PrimaryMenu />
      <ProfileMenu />
    </div>
  </div>
);

export default memo(SideNav);
