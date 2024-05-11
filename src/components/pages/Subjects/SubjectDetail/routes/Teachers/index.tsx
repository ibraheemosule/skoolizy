import UsersListLayout from '~components/reusables/UsersListLayout';
import TeachersList from './List';
import TeachersFilter from './Options';

const Teachers = () => (
  <section className="flex  _full flex-wrap max-h-full lg:flex-nowrap overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden">
        <UsersListLayout List={TeachersList} Filter={TeachersFilter} />
      </div>
    </div>
  </section>
);

export default Teachers;
