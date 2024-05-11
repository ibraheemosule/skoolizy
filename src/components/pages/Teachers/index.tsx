import UsersListLayout from '~reusables/UsersListLayout';
import TeachersList from './List';
import TeachersFilter from './Options';
import { Heading2 } from '~reusables/ui/Heading';
import AsideAdmin from '~components/Layout/AsideAdmin';

const Teachers = () => (
  <section className="flex  _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full lg:w-3/5 xl:w-8/12 shrink-0">
      <Heading2 className="capitalize text-center">Meet our Teachers</Heading2>
      <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden mt-6">
        <UsersListLayout List={TeachersList} Filter={TeachersFilter} />
      </div>
    </div>

    <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default Teachers;
