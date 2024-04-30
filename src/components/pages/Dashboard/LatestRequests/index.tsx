import { BaseText, BoldText } from '~reusables/ui/Text';
import RequestCard from '../../../reusables/RequestCard';

const LatestRequests = () => (
  <div className="mt-8 md:mt-0">
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
  </div>
);

export default LatestRequests;
