import { Outlet } from 'react-router-dom';
import DetailNav from './DetailNav';

const StudentDetail = () => (
  <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
    <div className="mx-auto w-full">
      <DetailNav />
    </div>
    <div className="mt-8 pb-8 grow md:max-h-[70vh] md:h-auto overflow-auto">
      <Outlet />
    </div>
  </div>
);

export default StudentDetail;
