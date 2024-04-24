import { memo } from 'react';
import { BaseText, BoldText } from 'components/reusables/ui/text';

import RequestCard from '../../../reusables/request-card';

const LatestRequests = () => (
  <>
    <div className="flex justify-between">
      <BoldText>Latest Requests</BoldText>
      <BaseText className=" text-purple.dark">View All</BaseText>
    </div>
    <div className="mt-2">
      <div className="mt-1 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-1 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
      <div className=" mt-1 bg-gray-100 rounded-lg">
        <RequestCard />
      </div>
    </div>
  </>
);

export default memo(LatestRequests);
