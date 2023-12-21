import { memo } from 'react';
import { BoldText } from 'components/reusables/ui/text';

import RequestCard from '../../../reusables/request-card/RequestCard';

const Requests = () => (
  <div className="mt-8 md:mt-0">
    <BoldText>Latest Requests</BoldText>
    <div className="max-h-[250px] overflow-auto mt-2">
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
  </div>
);

export default memo(Requests);
