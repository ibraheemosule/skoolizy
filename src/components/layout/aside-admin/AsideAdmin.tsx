import { memo } from 'react';
import LatestRequests from './lastest-requests/LatestRequests';
import Highlights from './highlights/Highlights';
import RateSomeone from './rate-someone/RateSomeone';

const AsideAdmin = () => (
  <>
    <div className="mt-8 md:mt-0">
      <LatestRequests />
    </div>
    <div className="mt-8">
      <RateSomeone />
    </div>
    <div className="mt-8">
      <Highlights />
    </div>
  </>
);

export default memo(AsideAdmin);
