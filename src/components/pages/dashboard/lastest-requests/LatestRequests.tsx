import { memo } from 'react';
import { BaseText, BoldText } from 'components/reusables/ui/text';

import RequestCard from '../../../reusables/request-card/RequestCard';

const Requests = () => (
  <div className="mt-8 md:mt-0">
    <div className="flex justify-between gap-6 mb-2">
      <BoldText>Requests</BoldText>
      <BaseText>View All Requests</BaseText>
    </div>
    <div className="max-h-[250px] overflow-auto ">
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
