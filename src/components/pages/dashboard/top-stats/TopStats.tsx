import { BoldText } from 'components/reusables/ui/text';
import { memo } from 'react';

const TopStats = () => (
  <div className=" bg-brown.dark mt-8 rounded-lg">
    <div className="grid grid-cols-1 gap-px  sm:grid-cols-3 md:grid-cols-2 xlg:grid-cols-3">
      <div className=" px-4 py-6">
        <BoldText className="text-2xl text-white">Guardian</BoldText>
        <div className="mt-2">
          <p className="text-sm font-medium  text-gray-400">Most Active</p>
          <p className=" flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium leading-6 text-gray-400">
            Least Active
          </p>
          <p className="flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
      </div>
      <div className=" px-4 py-6">
        <BoldText className="text-2xl text-white">Teacher</BoldText>
        <div className="mt-2">
          <p className="text-sm font-medium  text-gray-400">Most Active</p>
          <p className=" flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium leading-6 text-gray-400">
            Least Active
          </p>
          <p className="flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
      </div>
      <div className=" px-4 py-6">
        <BoldText className="text-2xl text-white">Student</BoldText>
        <div className="mt-2">
          <p className="text-sm font-medium  text-gray-400">Most Active</p>
          <p className=" flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium leading-6 text-gray-400">
            Least Active
          </p>
          <p className="flex items-baseline gap-x-2">
            <span className="font-semibold tracking-tight text-white">
              Mr John Doe
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default memo(TopStats);
