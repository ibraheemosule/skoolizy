import { memo } from 'react';
import PrimaryMenu from './primary-menu/PrimaryMenu';
import ProfileMenu from './profile-menu/ProfileMenu';

const SideNav = () => (
  <section className="modal z-10 h-screen w-full absolute top-0 left-0 md:relative md:w-1/3  xlg:w-1/4 xl:w-1/6 shrink-0">
    <div className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white">
      <div className="shrink-0 flex items-center gap-4 _full">
        <i className="fa fa-phone fa-3x" />
        <span className="text-3xl font-bold">Classify</span>
      </div>
      <div className="grow overflow-y-auto pb-8">
        <PrimaryMenu />
        <ProfileMenu />
      </div>
    </div>
  </section>
);

export default memo(SideNav);
