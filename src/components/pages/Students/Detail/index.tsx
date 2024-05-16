import { Outlet } from 'react-router-dom';
import SubjectList from './List';

const StudentDetail = () => (
  <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
    <div className="mx-auto w-full">
      <SubjectList />
    </div>
    <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
      <Outlet />
    </div>
  </div>
);

export default StudentDetail;