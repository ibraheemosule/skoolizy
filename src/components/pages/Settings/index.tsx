import AcademicTerm from './settings-widgets/AcademicTerm/index';
import Notifications from './settings-widgets/Notifications/index';

const Settings = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
        {/* school id card color,term resumes and ends, notification, deactive
        account school logo, password, number of classes a day, break periods,
        add class */}

        <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
          <Notifications />
          <AcademicTerm />
        </div>
      </div>
    </div>
  </section>
);

export default Settings;
