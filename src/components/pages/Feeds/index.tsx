import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { ActionBtn, BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import FeedCard from '~reusables/FeedCard';
import NewFeed from './NewFeed';
import FilterFeeds from './FilterFeeds';

const Feeds = () => {
  const [modal, setModal] = useState('');

  return (
    <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'newFeed' && <NewFeed closeModal={() => setModal('')} />}
          {modal === 'filter' && (
            <FilterFeeds closeModal={() => setModal('')} />
          )}
          <div className="flex flex-wrap justify-end gap-2 mt-8">
            <BaseBtn
              onClick={() => setModal('filter')}
              className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
            >
              Filter Feeds <Icon name="filter" height={20} width={20} />
            </BaseBtn>
            <ActionBtn
              onClick={() => setModal('newFeed')}
              className="px-4 py-2 text-purple.dark hover:opacity-50"
            >
              New Feed
            </ActionBtn>
          </div>
          <div className="mt-6 pb-8 grow md:h-auto overflow-auto">
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
        </div>
      </div>
      <div className="w-full lg:w-auto grow overflow-auto">
        <AsideAdmin />
      </div>
    </section>
  );
};

export default Feeds;
