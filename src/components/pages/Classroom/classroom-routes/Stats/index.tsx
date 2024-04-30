import { memo } from 'react';
import { BoldText } from '~reusables/ui/Text';
import RateSomeone from '~reusables/RateSomeone';

const TopStats = () => (
  <>
    <div className=" max-w-sm">
      <RateSomeone />
    </div>
    <div className=" bg-brown.dark mt-8 rounded-lg">
      <div className="grid grid-cols-1 gap-px  xs:grid-cols-2">
        <div className=" px-4 py-6 max-xs:mx-auto">
          <BoldText className="text-2xl text-white">Top 3 Students</BoldText>
          <div className="mt-2">
            <p className="text-sm font-medium  text-gray-400">First Ranked</p>
            <p className=" flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Second Highest
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Third Ranked
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
        </div>
        <div className=" px-4 py-6 max-xs:mx-auto">
          <BoldText className="text-2xl text-white">Bottom 3 Students</BoldText>
          <div className="mt-2">
            <p className="text-sm font-medium  text-gray-400">First Ranked</p>
            <p className=" flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Second Highest
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Third Ranked
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
        </div>
        <div className=" px-4 py-6 max-xs:mx-auto">
          <BoldText className="text-2xl text-white">
            Top 3 Best Behaved
          </BoldText>
          <div className="mt-2">
            <p className="text-sm font-medium  text-gray-400">First Ranked</p>
            <p className=" flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Second Highest
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Third Ranked
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
        </div>
        <div className=" px-4 py-6 max-xs:mx-auto">
          <BoldText className="text-2xl text-white">
            Top 3 Poorly Behaved
          </BoldText>
          <div className="mt-2">
            <p className="text-sm font-medium  text-gray-400">First Ranked</p>
            <p className=" flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Second Highest
            </p>
            <p className="flex items-baseline gap-x-2">
              <span className="font-semibold tracking-tight text-white">
                Mr John Doe
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium leading-6 text-gray-400">
              Third Ranked
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
  </>
);

export default memo(TopStats);
