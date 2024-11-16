import { useState } from 'react';
import FilterTopics from './Filter';
import AddTopic from './Add';
import ListOptions from '~components/reusables/ListOptions';

export default function TopicsOption() {
  const [modal, setModal] = useState('');

  return (
    <>
      <ListOptions
        onManageClick={() => setModal('filter')}
        onActionClick={() => setModal('new')}
        actionText="Add a new topic"
      />
      {modal === 'filter' && <FilterTopics closeModal={() => setModal('')} />}
      {modal === 'new' && <AddTopic closeModal={() => setModal('')} />}
    </>
  );
}
