import { BaseText, BoldText } from '~reusables/ui/Text';
import { ActionBtn } from '~reusables/ui/Buttons';
import Send from '~assets/Icons/SendIcon';
import FeedCard from '~components/reusables/FeedCard';

const Feeds = () => (
  <>
    <div className="flex justify-between">
      <BoldText>Latest Feeds</BoldText>
      <BaseText className=" text-purple.dark">View All</BaseText>
    </div>

    <div className="max-h-[300px] overflow-auto mt-4">
      <div className="flex items-end gap-3">
        <textarea
          placeholder="Share what's happening with others"
          className="grow w-full md:w-auto outline-none resize-none max-h-52 bg-gray-100 p-2 rounded-lg"
          maxLength={200}
        />
        <ActionBtn className="shrink-0 bg-transparent text-purple.dark hover:opacity-50">
          <Send color="#432c81" />
        </ActionBtn>
      </div>
    </div>

    <div className="max-h-[70vh] mt-8 overflow-y-auto">
      {Array(10)
        .fill('')
        .map(() => (
          <FeedCard
            key={Math.random()}
            author="Mr John Doe"
            date="yes"
            content="Explicabo nihil laborum. Saepe facilis consequuntur in
                        eaque. Consequatur perspiciatis quam. Sed est illo quia"
          />
        ))}
    </div>
  </>
);

export default Feeds;
