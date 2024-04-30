import { FC, memo } from 'react';
import AsideAdmin from '~components/Layout/AsideAdmin';
import { Heading2 } from '~reusables/ui/Heading';

interface IUserListLayout {
  type: 'teachers' | 'students' | 'guardians';
  Filter: FC;
  List: FC;
}

const UsersListLayout: FC<IUserListLayout> = ({ type, Filter, List }) => (
  <section className="flex  _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
    <div className="w-full min-h-full lg:w-3/5 xl:w-8/12 shrink-0">
      <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden">
        <div className="mx-auto">
          <Heading2 className="capitalize">Meet our {type}</Heading2>

          <div className="flex mt-6 flex-wrap gap-8 gap-y-4">
            <Filter />
          </div>
        </div>
        <ul className="flex justify-center flex-wrap gap-x-8 gap-y-16  mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
          <List />
        </ul>
      </div>
    </div>
    <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
      <AsideAdmin />
    </div>
  </section>
);

export default memo(UsersListLayout);
