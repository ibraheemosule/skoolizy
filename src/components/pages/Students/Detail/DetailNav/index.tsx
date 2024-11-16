import { HorizontalNav } from '~components/reusables/Menu';

const nav = {
  'Bio Data': 'biodata',
  Performance: 'performance',
  Results: 'results',
  Attendance: 'attendance',
};

const DetailNav = () => (
  <div className="mt-8">
    <HorizontalNav nav={nav} />
  </div>
);

export default DetailNav;
