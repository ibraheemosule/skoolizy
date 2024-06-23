import { Outlet } from 'react-router-dom';
// import AsideAdmin from '~components/Layout/AsideAdmin';

const Students = () => (
  <section className="flex _full flex-wrap max-h-full overflow-auto">
    <div className="w-full">
      <Outlet />
    </div>
    {/* <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div> */}
  </section>
);

export default Students;
