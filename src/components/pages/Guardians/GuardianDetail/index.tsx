import { Outlet } from 'react-router-dom';
import { HorizontalNav } from '~components/reusables/Menu';
import { guardianNav } from './utils-guardianDetail';

const GuardianDetail = () => (
  <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
    <div className="mx-auto w-full">
      <div className="mt-8">
        <HorizontalNav nav={guardianNav} />
      </div>
    </div>
    <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
      <Outlet />
    </div>
  </div>
);

export default GuardianDetail;
