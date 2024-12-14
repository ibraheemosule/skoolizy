import { FC, ReactElement, memo } from 'react';

interface IUserListLayout {
  Filter: FC | ReactElement;
  List: FC | ReactElement;
}

const UsersListLayout: FC<IUserListLayout> = ({ Filter, List }) => (
  <>
    {typeof Filter === 'function' ? <Filter /> : Filter}
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16  mt-8 pb-8 grow h-[70vh] md:h-auto overflow-auto">
      {typeof List === 'function' ? <List /> : List}
    </ul>
  </>
);

export default memo(UsersListLayout);
