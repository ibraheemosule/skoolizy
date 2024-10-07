import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import FeedCard from '~reusables/FeedCard';
import NewFeed from './NewFeed';
import FilterFeeds from './FilterFeeds';
import ListOptions from '~components/reusables/ListOptions';

const Feeds = () => {
  const [modal, setModal] = useState('');

  return (
    <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'new' && <NewFeed closeModal={() => setModal('')} />}
          {modal === 'filter' && (
            <FilterFeeds closeModal={() => setModal('')} />
          )}
          <div className="mt-8">
            <ListOptions
              onManageClick={() => setModal('filter')}
              onActionClick={() => setModal('new')}
              actionText="New feed"
            />
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
