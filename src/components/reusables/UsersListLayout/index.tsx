import { FC, ReactElement, memo } from 'react';

interface IUserListLayout {
  Filter: FC;
  List: FC | ReactElement;
}

const UsersListLayout: FC<IUserListLayout> = ({ Filter, List }) => (
  <>
    <Filter />
    <ul className="flex justify-center flex-wrap gap-x-8 gap-y-16  mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
      {typeof List === 'function' ? <List /> : List}
    </ul>
  </>
);

export default memo(UsersListLayout);
