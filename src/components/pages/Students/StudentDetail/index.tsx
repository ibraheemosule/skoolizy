import { Outlet } from 'react-router-dom';
import { HorizontalNav } from '~components/reusables/Menu';
import { staffNav } from './utils-staffDetail';

const StaffDetail = () => (
  <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
    <div className="mx-auto w-full">
      <div className="mt-8">
        <HorizontalNav nav={staffNav} />
      </div>
    </div>
    <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
      <Outlet />
    </div>
  </div>
);

export default StaffDetail;
