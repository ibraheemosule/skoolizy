import { memo } from 'react';
import RateSomeone from 'components/reusables/rate-someone';
import LatestRequests from './lastest-requests';
import Highlights from './highlights';

const AsideAdmin = () => (
  <>
    <div className="mt-8 md:mt-0">
      <LatestRequests />
    </div>
    <div className="mt-8 max-w-sm">
      <RateSomeone />
    </div>
    <div className="mt-8">
      <Highlights />
    </div>
  </>
);

export default memo(AsideAdmin);
