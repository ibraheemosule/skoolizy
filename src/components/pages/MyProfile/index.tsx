import { Outlet } from 'react-router-dom';
import { HorizontalNav } from '~components/reusables/Menu';

const nav = {
  'Personal Information': 'personal-information',
  'Contact Information': 'contact-information',
  'Academic Information': 'academic-information',
};

const MyProfile = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex mx-auto flex-col md:h-full md:overflow-hidden">
        <div className="mx-auto mt-8 w-full">
          <HorizontalNav nav={nav} />
        </div>
        <div className="mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  </section>
);

export default MyProfile;
