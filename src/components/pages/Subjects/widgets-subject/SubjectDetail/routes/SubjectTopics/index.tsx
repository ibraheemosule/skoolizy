import { useState } from 'react';
import AddTopic from './SubjectTopicsOptions/AddSubjectTopic';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';
import DeleteTopic from './SubjectTopicsOptions/DeleteSubjectTopic';
import TopicsOption from './SubjectTopicsOptions/index';

const Topics = () => {
  const [modal, setModal] = useState('');
  return (
    <>
      {modal === 'add' && <AddTopic closeModal={() => setModal('')} />}
      {modal === 'delete' && <DeleteTopic closeModal={() => setModal('')} />}
      <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
        <div className="w-full min-h-full shrink-0">
          <div className="flex flex-col md:h-full md:overflow-hidden">
            <TopicsOption />
            <ul className="mt-4 grow h-[70vh] md:h-auto overflow-auto">
              {Array(20)
                .fill('')
                .map(() => (
                  <div
                    key={Math.random()}
                    className="p-3 mt-6 first:mt-0 flex gap-4 justify-between bg-gray-100 text-purple.dark items-start rounded-lg"
                  >
                    <p className="flex gap-2 items-center">
                      <span className="w-1 h-1 shrink-0 rounded-full bg-gray-700" />
                      <a
                        className="hover:translate-y-0.5"
                        href="https://www.youtube.com/results?search_qxuery=mathematics+jss1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Intro to bodmas
                      </a>
                    </p>
                    <BaseBtn
                      onClick={() => setModal('delete')}
                      className="hover:translate-y-0.5"
                    >
                      <Icon name="trash" height={18} width={18} />
                    </BaseBtn>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
