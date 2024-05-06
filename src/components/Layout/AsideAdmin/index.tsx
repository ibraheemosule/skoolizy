import RateSomeone from '~components/reusables/RateSomeone';
import LatestRequests from './LatestRequests';
import Highlights from './LatestFeeds';

const AsideAdmin = () => (
  <>
    <div className="mt-8 md:mt-0">
      <RateSomeone />
    </div>
    <div className="mt-8 max-w-sm">
      <LatestRequests />
    </div>
    <div className="mt-8">
      <Highlights />
    </div>
  </>
);

export default AsideAdmin;
