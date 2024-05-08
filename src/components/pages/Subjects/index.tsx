import { useState } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { ActionBtn, BaseBtn } from '~reusables/ui/Buttons';
import Icon from '~assets/Icons';
import NewSubject from './NewSubject';
import FilterSubjects from './FilterSubjects';
import DeleteSubject from './DeleteSubject';
import AddTopic from './AddTopic';

const Subjects = () => {
  const [modal, setModal] = useState('');
  const [deleteSubject, setDeleteSubject] = useState('');
  const [addTopic, setAddTopic] = useState('');

  return (
    <section className="flex _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full lg:w-3/5 xl:w-8/12  shrink-0">
        <div className="flex flex-col md:h-full md:overflow-hidden">
          {modal === 'newSubject' && (
            <NewSubject closeModal={() => setModal('')} />
          )}
          {modal === 'filter' && (
            <FilterSubjects closeModal={() => setModal('')} />
          )}
          {deleteSubject && (
            <DeleteSubject
              subject={deleteSubject}
              closeModal={() => setDeleteSubject('')}
            />
          )}
          {addTopic && (
            <AddTopic subject={addTopic} closeModal={() => setAddTopic('')} />
          )}

          <div className="flex flex-wrap justify-end gap-2 mt-8">
            <BaseBtn
              onClick={() => setModal('filter')}
              className="px-4 flex gap-1 items-center font-bold text-purple.dark hover:opacity-50"
            >
              Filter Subjects <Icon name="filter" height={20} width={20} />
            </BaseBtn>
            <ActionBtn
              onClick={() => setModal('newSubject')}
              className="px-4 py-2 text-purple.dark hover:opacity-50"
            >
              New Subject
            </ActionBtn>
          </div>
          <div className="mt-6 pb-8 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 items-start gap-4 grow md:h-auto overflow-auto">
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <h4 className="text-xl text-purple.dark">
                <BaseBtn>Mathematics</BaseBtn>
              </h4>
              <div className="flex justify-between mt-8 text-sm">
                <BaseBtn
                  onClick={() => setAddTopic('mathematics')}
                  className="flex gap-1 text-purple.dark font-semibold"
                >
                  <span>Add Topic</span>
                  <Icon name="plus" height={16} width={16} stroke="#432c81" />
                </BaseBtn>
                <BaseBtn onClick={() => setDeleteSubject('mathematics')}>
                  <Icon name="trash" height={18} width={18} stroke="#432c81" />
                </BaseBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto grow overflow-auto">
        <AsideAdmin />
      </div>
    </section>
  );
};

export default Subjects;
